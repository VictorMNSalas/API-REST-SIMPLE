const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router()

const CategoriesServices = require('../services/categories')

const services = new CategoriesServices()

// se le manda un limite de elementos a mostrar con query -> http://localhost:3000/products?size=2
router.get('/', async (req, res) => {
  const categories = services.find()
  res.status(200).json({
    message: 'Users', data: categories
  })
})


//CuANDO hay rutas similares como esta y el de abajo, para que no choque hay que poner antes la consulta get que tenga una ruta especifica y despues la dinamica :id
router.get('/filter', async (req, res) => {

})


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = services.findOne(id)
    res.json(user)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

})


router.post('/', async (req, res) => {
  const body = req.body;
  const newCategorie = services.create(body)
  res.json({
    message: 'created',
    data: newCategorie
  })
})


//el put sirve para ingresar y actualizar
//diferencias entre el put y el patch -> el post se deben de mandar todos los datos y el patch solo recibe los datos que quieres actualizar

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const categorie = services.update(id, body)
    res.json({
      message: 'update',
      data: categorie
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const categorie = services.delete(id)
    res.json({
      message: 'deleted',
      categorie
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

})
module.exports = router
