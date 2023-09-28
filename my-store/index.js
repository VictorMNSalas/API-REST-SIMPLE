
const express = require('express');

const routerApi = require('./routes')
const { faker } = require('@faker-js/faker'); //es para que genere elementos falsos para pruebas


const { logErrors,boomErrorHandler, errorHandler } = require('./middlewares/error.handler')

//crear la app y su puerto
const app = express();
const port = 3000;

//permite recibir informacion de tipo json mediante post
app.use(express.json())


//Generar una ruta principal default, estos siempre tienen un callback la cual recibe un request y response
app.get('/', (req, res) => {
  res.send('Hello server in express')
})


app.get('/nueva-ruta', (req, res) => {
  res.send('Hello this is a new route')
})

//le mandamos el parametro app a la funcion que esta en la careta routes en el archivo index.js
routerApi(app)


//esto se ejecuta mediante secuencial primero el logerror y despues el otro
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


/*


app.get('/categories/:categoriesId/products/:productsId', (req, res) => {
  const { categoriesId, productsId } = req.params
  res.json({
    categoriesId, productsId
  })
})


///asi se definen una query en el url -> users?limit=200&offset=89
app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json(
      { limit, offset }
    )
  } else {
    res.send('No hay parametros')
  }
})
*/
//Levantar el servidor
app.listen(port, () => {
  console.log('El servidor esta ejecutando en ' + port)
})
