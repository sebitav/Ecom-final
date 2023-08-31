import fs from 'fs-extra'
import { v4 as uuidv4 } from 'uuid'
import logger from '../../../utils/logger.js'

class Productos {
  constructor() {
    this.getAll = this.getAll.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
    this.getById = this.getById.bind(this)
    this.removeById = this.removeById.bind(this)
    this.updateById = this.updateById.bind(this)
  }

  async getAll() {
    const productos = await fs.readJSON('productos.json')
    return productos
  }

  async saveProduct(data) {
    const productos = await this.getAll()
    data = { id: uuidv4(), ...data, timestamp: new Date().toISOString() }
    productos.push(data)
    await fs.writeJSON('productos.json', productos)

    return data
  }

  async getById(id) {
    const productos = await this.getAll()
    const producto = productos.find(p => (p._id || p.id) === id)

    if (typeof producto === 'undefined') return []
    return producto
  }

  async removeById(id) {
    const productos = await this.getAll()
    const newProductos = productos.filter(p => (p._id || p.id) !== id)
    await fs.writeJSON('productos.json', newProductos)
  }

  async updateById(id, data) {
    const productos = await this.getAll()
    const newProductos = productos.map(p => {
      if ((p._id || p.id) === id) {
        return { ...p, ...data }
      }
      return p
    })
    await fs.writeJSON('productos.json', newProductos)
  }
}

const productoServiceFile = new Productos()

export { productoServiceFile }