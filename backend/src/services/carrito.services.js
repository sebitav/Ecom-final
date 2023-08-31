import Carrito from "../models/carrito.js";
import logger from '../utils/logger.js'

class carrito {
   async saveCarrito() {
      const cart = new Carrito()
      const newCarrito = await cart.save()
      logger.info('carrito guardado en mongodb')
      return newCarrito
   }

   async getCarrito(id) {
      const cart = await Carrito.findById(id).populate('productos')
      return cart.productos
   }

   async removeCarrito(id) {
      await Carrito.findByIdAndRemove(id)
      logger.info('carrito eliminado de mongodb')
   }

   async saveProdInCarrito(id, prodId) {
      const cart = await Carrito.findById(id)

      cart.productos = cart.productos.concat(prodId)
      cart.save()
   }

   async removeProdInCarrito(id, prodId) {
      const cart = await Carrito.findById(id).populate('productos')
      const newCart = cart.productos.filter(p => p.id !== prodId)
      logger.info('producto eliminado de carrito')
      cart.productos = newCart
      await cart.save()
      return cart
   }
}

const carritoService = new carrito()

export { carritoService }