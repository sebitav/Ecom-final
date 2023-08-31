import ProdDAO from '../services/DAO/producto.factory.js'
import productosDTO from '../services/DTO/productos.DTO.js'

const producto = ProdDAO.initInstance()

export const resolvers = {
  getAllProducts: async () => {
    const productos = await producto.getAll()
    const formatedProducts = productos.map(p => productosDTO(p))
    return formatedProducts
  },

  getProductById: async (args) => {
    const product = await producto.getById(args.id)
    const formatedProduct = productosDTO(product)
    return formatedProduct
  },

  createProduct: async (args) => {
    const nuevoProducto = await producto.saveProduct(args.newProduct)
    const formatedProduct = productosDTO(nuevoProducto)
    return formatedProduct
  },

  deleteProduct: async (args) => {
    await producto.removeById(args.id)
    return { status: 'producto eliminado' }
  },

  updateProduct: async (args) => {
    console.log(args.newProduct)

    const response = await producto.updateById(args.id, args.newProduct)
    console.log(response)

    const formatedProduct = productosDTO(response)
    return formatedProduct
  }
}