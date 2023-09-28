const express = require('express');
const ProductsService = require('../services/products');
const router = express.Router()


//servicios son donde se muestra o se almacena toda la logica
const services = new ProductsService()

// se le manda un limite de elementos a mostrar con query -> http://localhost:3000/products?size=2
router.get('/', (req, res) => {
  // const { size } = req.query
  const products = services.find()
  res.json(products)
})


//CuANDO hay rutas similares como esta y el de abajo, para que no choque hay que poner antes la consulta get que tenga una ruta especifica y despues la dinamica :id
router.get('/filter', (req, res) => {

})


router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = services.findOne(id)
  res.json(product)

  /*
  if (id === '999') {
    //404 es para mostrar que no se encontro el producto
    res.status(404).json({
     message: 'Not Found'
    })
  } else {
    //200 es un ok
    res.status(200).json({
      id,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
*/
})

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = services.create(body)
  //El status se agrega para usar los codigos de http
  res.status(201).json(newProduct)
})


//PATCH (Actualizar un recurso parcialmente)
//es decir que en el patch solo modificara los elementos que le envies
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = services.update(id, body)
  res.json(product)
})

//PUT (Actualizar un recurso completo)
//es decir que el put modifica todo el elemento es decir que debes de enviarle todos los parametros
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'update',
    data: body, id
  })
})
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = services.delete(id)
  res.json(response)
})
module.exports = router
