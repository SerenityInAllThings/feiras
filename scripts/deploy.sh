#!/bin/bash
# This should be ran by pnpm by using 'pnpm deploy:<env>' at at the frontend folder

set -e
# set -x

ENVIRONMENT=$1
# Setting AWS CLI profile
export AWS_PROFILE="$ENVIRONMENT"
DEPLOYMENT_FOLDER=./dist

validate_dependencies() {
  command -v aws >/dev/null 2>&1 || { 
    echo >&2 "AWS CLI is required but it's not installed. Aborting.";
    exit 1;
  }

  echo validating S3 bucket and CloudFront distribution exists for profile "$ENVIRONMENT"

  S3_TMP_FILE=/tmp/.s3-bucket.json
  aws resourcegroupstaggingapi get-resources --tag-filters Key=frontend,Values=yes --tag-filters Key=App,Values=Feiras --resource-type-filters 's3' --region sa-east-1 > $S3_TMP_FILE
  BUCKET_ARN=$(jq -r ".ResourceTagMappingList[0].ResourceARN" "$S3_TMP_FILE")
  test "$BUCKET_ARN" = "null" && {
    echo >&2 "Bucket not found. Aborting.";
    exit 2;
  }
  BUCKET_NAME=$(echo "$BUCKET_ARN" | cut -d ":" -f 6)
  echo "Bucket ARN: $BUCKET_ARN"
  rm $S3_TMP_FILE

  CLOUDFRONT_TMP_FILE=/tmp/.cloudfront-distribution.json
  aws resourcegroupstaggingapi get-resources --tag-filters Key=frontend,Values=yes --tag-filters Key=App,Values=Feiras --resource-type-filters 'cloudfront' > $CLOUDFRONT_TMP_FILE
  CLOUDFRONT_ARN=$(jq -r ".ResourceTagMappingList[0].ResourceARN" "$CLOUDFRONT_TMP_FILE")
  test "$CLOUDFRONT_ARN" = "null" && {
    echo >&2 "CloudFront distribution not found. Aborting.";
    exit 3;
  }
  DISTRIBUTION_ID=$(echo "$CLOUDFRONT_ARN" | cut -d "/" -f 2)
  echo "CloudFront ARN: $CLOUDFRONT_ARN"
  rm $CLOUDFRONT_TMP_FILE

  test -d "$DEPLOYMENT_FOLDER" || {
    echo >&2 "Deployment folder '$DEPLOYMENT_FOLDER' not found. Aborting.";
    exit 4;
  }
}

delete_current_deployment_files() {
  echo "Deleting current deployment files from bucket $BUCKET_NAME ..."
  aws s3 rm --recursive "s3://$BUCKET_NAME"
  echo "Done deleting current deployment files from S3"
}

upload_new_deployment_files() {
  echo "Uploading new deployment files to bucket $BUCKET_NAME ..."
  aws s3 cp --recursive "$DEPLOYMENT_FOLDER" "s3://$BUCKET_NAME"
  echo "Done uploading new deployment files to S3"
}

invalidate_cloudfront_cache() {
  echo "Invalidating CloudFront cache for distribution $DISTRIBUTION_ID ..."
  aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*" --no-cli-pager
  echo "Done invalidating CloudFront cache for distribution $DISTRIBUTION_ID"
}

validate_dependencies


echo "Deploying frontend in $ENVIRONMENT ..."

delete_current_deployment_files
upload_new_deployment_files
invalidate_cloudfront_cache

echo "Done deploying frontend in $ENVIRONMENT"