const Joi = require('joi')


const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(15)
const content_items = Joi.number().integer().min(1)
const company_name = Joi.string().alphanum().min(3).max(15)


const createCategorieSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  content_items: content_items.required(),
  company_name: company_name.required()

})
const updateCategorieSchema = Joi.object({
  name: name,
  price: price,
  content_items: content_items,
  company_name: company_name
})
const getCategorieSchema = Joi.object({
  id: id.required()
})



module.exports = { createCategorieSchema, updateCategorieSchema, getCategorieSchema }
