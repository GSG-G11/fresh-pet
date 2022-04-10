/* eslint-disable operator-linebreak */
/* eslint-disable no-useless-escape */
const Joi = require('joi');

const regexURL =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

const productValidationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(2).required(),
  petCategory: Joi.string().min(2).max(100).required(),
  subCategory: Joi.string().min(2).max(100).required(),
  price: Joi.number().min(0.001).max(9999999).required(),
  image: Joi.string().allow('').pattern(regexURL).required(),
});

module.exports = productValidationSchema;
