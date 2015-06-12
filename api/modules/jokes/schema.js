var Joi = require('joi');

module.exports = Joi.object().keys({
  content: Joi.string().required(),
  comic_id: Joi.number().integer().required()
});
