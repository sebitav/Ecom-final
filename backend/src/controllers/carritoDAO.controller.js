import CarritoDAO from "../services/DAO/carrito.factory.js"

let carrito = CarritoDAO.initInstance()

const getProductFromCart = async (req, res) => {
  const { id } = req.params
  const productos = await carrito.getCarrito(id)
  productos ? res.json({ productos }) : res.status(404).json({ status: 'carrito no encontrado' })
}

const addProductToCart = async (req, res) => {
  const { id } = req.params
  const { id: productId } = req.body

  await carrito.saveProdInCarrito(id, productId)
  res.json({ status: 'producto agregado a carrito' })
}

const removeProductFromCart = async (req, res) => {
  console.log('carrito=>', carrito)
  const { id, prodId } = req.params
  const { productos } = await carrito.removeProdInCarrito(id, prodId)
  console.log('productos=>', productos)

  const cart = await carrito.getCarrito(id)

  res.json({ status: 'producto eliminado del carrito', cart, productos })
  // res.json({ status: 'producto eliminado del carrito' })
}

export default { getProductFromCart, addProductToCart, removeProductFromCart } 