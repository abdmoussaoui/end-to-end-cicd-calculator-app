variable "aws_region" {
  description = "AWS region"
  type        = string
}

variable "key_name" {
  description = "Nom de la key pair AWS"
  type        = string
}

variable "instance_type_master" {
  description = "Type d'instance pour le master"
  type        = string
}

variable "instance_type_worker" {
  description = "Type d'instance pour le worker"
  type        = string
}