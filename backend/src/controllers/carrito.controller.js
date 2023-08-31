import { carritoService } from "../services/carrito.services.js"


const getProductFromCart =  async (req, res) => {
  const { id } = req.params
  const productos = await carritoService.getCarrito(id)
  productos ? res.json({ productos }) : res.status(404).json({ status: 'carrito no encontrado' })
}

const addProductToCart = async (req, res) => {
  const { id } = req.params
  const { _id: productId} = req.body

  await carritoService.saveProdInCarrito(id, productId)
  res.json({ status: 'producto agregado a carrito' })
}

const removeProductFromCart = async (req, res) => {
  const { id, prodId } = req.params
  const {productos} = await carritoService.removeProdInCarrito(id, prodId)
  const carrito = await carritoService.getCarrito(id)
  console.log(carrito)

  res.json({ status: 'producto eliminado del carrito', carrito, productos})
}

export default {getProductFromCart, addProductToCart, removeProductFromCart}