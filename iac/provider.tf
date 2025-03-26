provider "aws" {
  profile = "pessoal"
  region  = "sa-east-1"

  default_tags {
    tags = {
      App = "Feiras"
    }
  }
}
