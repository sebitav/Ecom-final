import '../../../config/mongoose.js'
import Producto from '../../../models/producto.js'
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

      const productos = await Producto.find({})
      return productos
   }

   async saveProduct(data) {
      const newProd = await Producto.create(data)
      logger.info('producto guardado en mongodb')
      return newProd
   }

   async getById(id) {
      try {
         const producto = await Producto.findOne({ _id: id })
         return producto
      } catch (error) {
         return null
      }
   }

   async removeById(id) {
      const response = await Producto.deleteOne({ _id: id })
      logger.info('producto eliminado de mongodb')
      console.log(response)
   }

   async updateById(id, data) {
      const response = await Producto.findOneAndUpdate({ _id: id }, { ...data }, { new: true })
      logger.info('producto actualizado en mongodb')

      return response
   }
}

const productServiceMongo = new Productos()

export { productServiceMongo }