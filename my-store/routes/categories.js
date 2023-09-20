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
      name: faker.commerce.department(),
      content_items: faker.random.numeric(5),
      company_name:  faker.company.name()
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
    name: faker.commerce.department(),
    content_items: faker.random.numeric(5),
    company_name:  faker.company.name()
  })
})


router.post('/', (req, res) => {
  const body = req.body;
  products.push(body)
  res.json({
    message: 'created',
    data: products
  })
})


//el put sirve para ingresar y actualizar
//diferencias entre el put y el patch -> el post se deben de mandar todos los datos y el patch solo recibe los datos que quieres actualizar

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'update',
    data: body, id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id
  })
})
module.exports = router
