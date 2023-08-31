import express from 'express'
// import carritoController from '../controllers/carrito.controller.js'
import carritoDAOController from '../controllers/carritoDAO.controller.js'

const router = express.Router()

router.get('/:id/productos', carritoDAOController.getProductFromCart)
router.post('/:id/productos', carritoDAOController.addProductToCart)
router.delete('/:id/productos/:prodId', carritoDAOController.removeProductFromCart)

export default router
