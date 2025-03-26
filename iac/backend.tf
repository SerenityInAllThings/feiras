terraform {
  backend "s3" {
    bucket = "peterson-tf-states"
    key    = "feiras.tfstate"
    region = "us-east-1"
  }
}
