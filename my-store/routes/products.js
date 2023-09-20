const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router()

// se le manda un limite de elementos a mostrar con query -> http://localhost:3000/products?size=2
router.get('/', (req, res) => {
  const { size } = req.query
  const limit = size || 10
  const products = []
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.send(products)
})


//CuANDO hay rutas similares como esta y el de abajo, para que no choque hay que poner antes la consulta get que tenga una ruta especifica y despues la dinamica :id
router.get('/filter', (req, res) => {

})


router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl()
  })
})

router.post('/', (req,res)=>{
  const body = req.body;
  console.log(body)
  res.json({
    message: 'created',
    data: body
  })
})
module.exports = router
