import mySqlConfig from '../../../config/configMysql.js'
import Knex from 'knex'

class Productos {
  constructor(config) {
    this.knex = Knex(config)
    this.getAll = this.getAll.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
    this.getById = this.getById.bind(this)
    this.removeById = this.removeById.bind(this)
    this.updateById = this.updateById.bind(this)
  }

  async getAll() {
    try {
      const productos = await this.knex.select().table('productos')
      return productos
    } catch (e) {
      console.log(e)
    }
  }

  async getById(id) {
    const producto = await this.knex('productos').where('id', id)

    return producto
  }

  async saveProduct(data) {
    const nuevoProductoID = await this.knex('productos').returning().insert(data)
    const nuevoProducto = await this.getById(nuevoProductoID[0])

    return nuevoProducto
  }

  async removeById(id) {
    try {
      await this.knex('productos').where('id', id).del()
    } catch (e) {
      console.log(e)
    }
  }

  async updateById(id, data) {
    await this.knex('productos').where('id', id).update(data)
  }
}

class Carrito {
  constructor(config) {
    this.knex = Knex(config)
  }

  // async saveCarrito() {}

  async getCarrito(id) {
    return this.knex('carrito')
      .join('productos', 'carrito.productoID', '=', 'productos.id')
      .then((data) => {
        return data.filter((p) => p.carritoID === id)
      })
  }

  // async removeCarrito(id) {}

  async saveProdInCarrito(id, data) {
    await this.knex('carrito').insert({ carritoID: id, productoID: data.id })
  }

  async removeProdInCarrito(id, id_prod) {
    await this.knex('carrito').where({ carritoID: id, productoID: id_prod }).del()
  }
}

const productServiceMysql = new Productos(mySqlConfig)
const carritoService = new Carrito(mySqlConfig)

export { productServiceMysql, carritoService }
