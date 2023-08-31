import {productService} from '../services/product.services.js'
import logger from '../utils/logger.js'

const ADMIN = true

const getProducts =  async (req, res) => {
  const { id } = req.params
  const productos = await productService.getAll() //--USANDO MONGODB

  if (typeof id === 'undefined') {
    return res.json(productos)
  }
  const producto = await productService.getById(id) //--USANDO MONGODB

  if (producto.length === 0) return res.status(404).json({ error: 'no se encontro el producto...' })

  logger.info('producto encontrado en mongodb')
  return res.json(producto)
}

const createProducts = async (req, res) => {
  if (!ADMIN)
    return res
      .status(401)
      .json({
        error: -1,
        description: `ruta ${req.originalUrl} metodo ${req.method} no Autorizado`,
      })
      .end()

  const { body } = req
  const nuevoProducto = await productService.saveProduct(body) //--USANDO MONGO

  res.json({ status: 'producto agregado', nuevoProducto })
  logger.info('POST api/productos producto agregado')
}

const deleteProduct =  async (req, res) => {
  if (!ADMIN)
    return res
      .status(401)
      .json({
        error: -1,
        description: `ruta ${req.originalUrl} metodo ${req.method} no Autorizado`,
      })
      .end()

  const { id } = req.params
  await productService.removeById(id) //--USANDO MONGO

  res.json({ status: 'producto eliminado' })
  logger.info('DELETE api/productos producto eliminado')
}

const updateProduct =  async (req, res) => {
  if (!ADMIN)
    return res
      .status(401)
      .json({
        error: -1,
        description: `ruta ${req.originalUrl} metodo ${req.method} no Autorizado`,
      })
      .end()

  const { id } = req.params
  const { body } = req

  await productService.updateById(id, body) //--USANDO MONGO
  res.json({ status: 'updated' })
  logger.info('PUT api/productos producto actualizado')
}

export default {getProducts, createProducts, deleteProduct, updateProduct}