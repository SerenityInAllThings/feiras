locals {
  s3_origin_id = "myS3Origin"
}

resource "aws_cloudfront_origin_access_control" "frontend" {
  name                              = "frontend-feiras-acl"
  description                       = "Frontend policy for Feiras app"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "frontend" {
  origin {
    origin_id                = local.s3_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.frontend.id
    domain_name              = aws_s3_bucket.frontend.bucket_regional_domain_name
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_code            = 403
    error_caching_min_ttl = 10
    response_page_path    = "/index.html"
    response_code         = 200
  }

  custom_error_response {
    error_code            = 400
    error_caching_min_ttl = 10
    response_page_path    = "/index.html"
    response_code         = 200
  }

  custom_error_response {
    error_code            = 404
    error_caching_min_ttl = 10
    response_page_path    = "/index.html"
    response_code         = 200
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 32400
    default_ttl            = 64800
    max_ttl                = 64800
  }

  price_class = "PriceClass_All"

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = {
    "frontend" : "yes"
  }
}
