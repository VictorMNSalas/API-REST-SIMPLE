const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(10)
const jobArea = Joi.string().alphanum().min(5)
const bio = Joi.string().alphanum().min(5)
const sex = Joi.string().alphanum().min(1)


const createUserSchema = Joi.object({
  name: name.required(),
  jobArea: jobArea.required(),
  bio: bio,
  sex: sex.required()
})


const updateUserSchema = Joi.object({
  name: name,
  jobArea: jobArea,
  bio: bio,
  sex: sex
})

const getUserSchema = Joi.object({
  id: id.required()
})


module.exports = { getUserSchema, createUserSchema, updateUserSchema }
