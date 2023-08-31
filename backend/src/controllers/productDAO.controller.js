import ProdDAO from '../services/DAO/producto.factory.js'
import productoDTO from '../services/DTO/productos.DTO.js'
import logger from '../utils/logger.js'

let producto = ProdDAO.initInstance()

const getProducts = async (req, res) => {
  const { id } = req.params

  if (typeof id === 'undefined') {
    const productos = await producto.getAll()
    const formatedProducts = productos.map(p => productoDTO(p))
    return res.json(formatedProducts)
  }

  const product = await producto.getById(id)

  if (product === null) return res.status(404).json({ error: 'no se encontro el producto...' })
  const formatedProduct = productoDTO(product)
  return res.json(formatedProduct)
}

const createProduct = async (req, res) => {
  const { body } = req
  const nuevoProducto = await producto.saveProduct(body)

  const formatedProduct = productoDTO(nuevoProducto)
  res.json({ status: 'producto agregado', formatedProduct })
  logger.info('POST api/productos producto agregado')
}

const deleteProduct = async (req, res) => {
  const { id } = req.params
  await producto.removeById(id)

  res.json({ status: 'producto eliminado' })
  logger.info('DELETE api/productos producto eliminado')
}

const updateProduct = async (req, res) => {
  const { id } = req.params
  const { body } = req

  await producto.updateById(id, body)
  res.json({ status: 'updated' })
  logger.info('PUT api/productos producto actualizado')
}

export default { getProducts, createProduct, deleteProduct, updateProduct }  