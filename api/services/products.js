const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom') // esta define en si los codigos de server status automatico



//En servicios se usa  POO (programacion orientada a objetos)

class ProductsService {

  //Constructor es un método especial que se utiliza para inicializar objetos de una clase. Su principal función es asignar valores iniciales a las propiedades (variables) de un objeto cuando se crea una instancia de esa clase
  constructor() {
    this.products = []
    this.generete()
  }

  //FUNCIONES QUE GENERAN ALGUNA ACCION QUE QUERRAMOS

  generete() {
    const limit = 10
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async create(data) {
    const newProduct = await {
      id: faker.string.uuid(), //this.products.length + 1,
      ...data
    }

    this.products.push(newProduct)
    return newProduct
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 1000)
    })
  }

  async errorMiddleware() {
    const name = await this.getTotal()
    return name
  }
  async findOne(id) {

    const index = await this.products.findIndex(element => element.id == id)
    if (index == -1) {
      throw new boom.notFound('Product not found') //forma de usar el boom para definir un error mas sencillo
    }
    if (this.products[index].isBlock) {
      throw new boom.conflict('Product is block')
    } else {
      return this.products[index]
    }

  }

  async update(id, changes) {
    const index = await this.products.findIndex(item => item.id == id)
    if (index == -1) {
      throw new Error('Product not find')
    } else {
      const product = this.products[index]
      this.products[index] = {
        ...product, ...changes
      }
      return this.products[index]
    }
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id == id)
    if (index == -1) {
      throw new boom.notFound('Product not exist')
    }
    this.products.splice(index, 1)
    return { message: 'Product deleted' }

  }
}


module.exports = ProductsService
