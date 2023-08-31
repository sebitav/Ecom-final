import Producto from "../models/producto.js";
import logger from '../utils/logger.js'

class Prod {

   async getAll() {
      const productos = await Producto.find({})
      return productos
   }

   async saveProduct(data) {
      const newProd = await Producto.create(data)
      logger.info('producto guardado en mongodb')
      return newProd
   }

   async getById(id) {
      const producto = await Producto.find({ _id: id })
      return producto
   }

   async removeById(id) {
      const response = await Producto.deleteOne({ _id: id })
      logger.info('producto eliminado de mongodb')
      console.log(response)
   }

   async updateById(id, data) {
      const response = await Producto.findOneAndUpdate({ _id: id }, { ...data }, { new: true })
      logger.info('producto actualizado en mongodb')
   }
}

const productService = new Prod()

export { productService }