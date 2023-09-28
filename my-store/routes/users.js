const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router()
const UserService = require('../services/users')

const services = new UserService()

// se le manda un limite de elementos a mostrar con query -> http://localhost:3000/products?size=2
router.get('/', async (req, res) => {
  // const { size } = req.query
  const users = services.find()
  res.send(users)
})


//CuANDO hay rutas similares como esta y el de abajo, para que no choque hay que poner antes la consulta get que tenga una ruta especifica y despues la dinamica :id
router.get('/filter', async (req, res) => {

})


router.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = services.findOne(id)
  res.json(user)
})


router.post('/', async (req, res) => {
  const body = req.body;
  const user = services.create(body)
  res.json({
    message: 'created',
    data: user
  })
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = services.update(id, body)
    res.json({

      message: 'update',
      data: user
    })
  } catch (error) {

  } res.status(404).json({
    message: error.message
  })

})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = services.delete(id)
    res.json({
      response,
      id
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

})
module.exports = router
