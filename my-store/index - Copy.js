const express = require('express');

//crear la app y su puerto
const app = express();
const port = 3000;


//Generar una ruta principal default, estos siempre tienen un callback la cual recibe un request y response
app.get('/', (req, res) => {
  res.send('Hello server in express')
})


app.get('/nueva-ruta', (req, res)=>{
  res.send('Hello this is a new route')
})

app.get('/products', (req, res)=>{
  res.send({
    "productos": [
      {
        "nombre": "Producto 1",
        "precio": 19.99,
        "descripcion": "Este es el producto 1. Es un producto de ejemplo.",
        "disponibilidad": true
      },
      {
        "nombre": "Producto 2",
        "precio": 29.99,
        "descripcion": "Este es el producto 2. También es un producto de ejemplo.",
        "disponibilidad": false
      },
      {
        "nombre": "Producto 3",
        "precio": 14.99,
        "descripcion": "Este es el producto 3. Otro ejemplo de producto.",
        "disponibilidad": true
      },
      {
        "nombre": "Producto 4",
        "precio": 39.99,
        "descripcion": "Este es el producto 4. El último producto de ejemplo.",
        "disponibilidad": true
      }
    ]
  }
  )
})


//Levantar el servidor
app.listen(port, () => {
  console.log('El servidor esta ejecutando en ' + port)
})
