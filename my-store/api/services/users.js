const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom')

class UserService {

  constructor() {
    this.users = []
    this.generete()
  }

  generete() {
    const limit = 100
    for (let index = 1; index <= limit; index++) {
      this.users.push({
        id: index,
        name: faker.person.fullName(),
        jobArea: faker.person.jobArea(),
        bio: faker.person.bio(),
        sex: faker.person.sex()
      })
    }
  }

  async create(data) {
    const newUser = {
      id: this.users.length + 1,
      ...data
    }

    this.users.push(newUser)
    return newUser
  }

  async find() {
    return this.users
  }

  async findOne(id) {
    const index = this.users.findIndex(element => element.id == id)
    if (index == -1) {
      throw new boom.notFound('Theres any user with that id')
    } else {
      return this.users[index]
    }

  }

  async update(id, data) {
    const index = this.users.findIndex((element) => element.id == id)
    if (index == -1) {
      throw new boom.badRequest('The id is not valied')
    } else {
      const user = this.users[index]
      const userUpdate = {
        ...user, ...data
      }
      return userUpdate
    }
  }

  async delete(id) {
    const index = this.users.findIndex((element) => element.id == id)
    if (index == -1) {
      throw new Error('The id is not valied')
    } else {
      this.users.slice(index, 1)
      return { message: 'User deleted' }
    }
  }
}


module.exports = UserService
