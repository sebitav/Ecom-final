import fs from 'fs-extra'
// const fs = require('fs-extra')

class ProductController {
  constructor(file) {
    this.file = file
  }

  async saveProduct(data) {
    const content = await fs.readJSON(this.file)
    const ids = content.map((p) => p.id)
    const newId = Math.max(...ids) + 1
    const timestamp = Date.now()
    const newProduct = { id: newId, timestamp, ...data }
    content.push(newProduct)

    await fs.writeJSON(this.file, content)
    return newProduct
  }

  async getAll() {
    try {
      const content = await fs.readJSON(this.file)
      return content
    } catch (error) {
      console.log(error)
    }
  }

  async getById(id) {
    const content = await fs.readJSON(this.file)
    const product = await content.find((p) => p.id === id)
    if (typeof product === 'undefined') return null

    return product
  }

  async updateById(id, data) {
    const fileContent = await fs.readJSON(this.file)
    const producto = fileContent.map((p) => (p.id === id ? { id: p.id, ...data } : p))

    await fs.writeJSON(this.file, producto)
  }

  async removeById(id) {
    const content = await fs.readJSON(this.file)
    const newContent = content.filter((p) => p.id !== id)

    await fs.writeJSON(this.file, newContent)
  }
}

class CarritoController {
  constructor(file) {
    this.file = file
  }

  async saveCarrito() {
    const content = await fs.readJSON(this.file)
    const ids = content.map((p) => p.id)
    const newId = Math.max(...ids) + 1
    const cart_timestamp = Date.now()

    const newCarrito = { id: newId, cart_timestamp, productos: [] }
    content.push(newCarrito)

    await fs.writeJSON(this.file, content)

    return newId
  }

  async getCarrito(id) {
    const content = await fs.readJSON(this.file)
    const carrito = content.find((c) => c.id === id)
    if (!carrito) return null

    return carrito.productos
  }

  async removeCarrito(id) {
    const content = await fs.readJSON(this.file)
    const newContent = content.filter((c) => c.id !== id)

    await fs.writeJSON(this.file, newContent)
  }

  async saveProdInCarrito(id, data) {
    const content = await fs.readJSON(this.file)

    const carrito = content.find((c) => c.id === id)
    carrito.productos.push(data)

    const contentFiltered = content.filter((c) => c.id !== id)
    contentFiltered.push(carrito)

    await fs.writeJSON(this.file, contentFiltered)
  }

  async removeProdInCarrito(id, id_prod) {
    const content = await fs.readJSON(this.file)
    const carrito = content.find((c) => c.id === id)
    if (!carrito) return null

    const newProductos = carrito.productos.filter((p) => p.id !== id_prod)
    carrito.productos = newProductos

    const contentFiltered = content.filter((c) => c.id !== id)
    contentFiltered.push(carrito)

    await fs.writeJSON(this.file, contentFiltered)

    return true
  }
}

const productController = new ProductController('./model/productos.json')
const carritoController = new CarritoController('./model/carrito.json')

export  { productController, carritoController }
