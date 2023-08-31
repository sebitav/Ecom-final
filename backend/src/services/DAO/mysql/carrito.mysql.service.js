import mySqlConfig from '../../../config/configMysql.js'
import Knex from 'knex'

class Carrito {
  constructor(config) {
    this.knex = Knex(config)
    this.getCarrito = this.getCarrito.bind(this)
    this.saveProdInCarrito = this.saveProdInCarrito.bind(this)
    this.removeProdInCarrito = this.removeProdInCarrito.bind(this)
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
    return this.knex('carrito')
      .join('productos', 'carrito.productoID', '=', 'productos.id')
      .then(data)
  }
}

const carritoServiceMysql = new Carrito(mySqlConfig)

export { carritoServiceMysql }
