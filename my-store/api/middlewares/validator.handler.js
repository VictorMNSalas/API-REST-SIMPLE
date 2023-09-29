const boom = require('@hapi/boom')

function validationHandler(schema, property) {
  //handler dinamico
  return (req, res, next) => {
    const data = req[property] // -> property seria el body, params o el query
    const { error } = schema.validate(data, { abortEarly: false})//abortearly es para que mande los errores en conjunto y no solo 1
    if (error) {
      next(boom.badRequest(error)) //manda el error apra validar en el middleware de error
    }


    next() //este seguira con el trabajo en caso de que todo este bien
  }
}


module.exports = validationHandler
