//Middleware para errores, este es global


//Las funciones deben de tener estos parametros aunque no se esten usando es necesario

//obtiene los errores cuando surgen en la aplicacion
function logErrors(err, req, res, next) {

  next(err)
}

//crear un formato valido para los errores
function errorHandler(err, req, res, next) {

  res.status(500).json({ message: err.message, stack: err.stack })
}

function boomErrorHandler(err, req, res, next) {

  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }


}


//Los middleware de error se deben de hacer despues de definir el routing
module.exports = { logErrors, errorHandler, boomErrorHandler }
