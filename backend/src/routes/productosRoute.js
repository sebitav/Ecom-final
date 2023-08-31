import express from 'express'
// import productController from '../controllers/productos.controller.js'
import productDAOController from '../controllers/productDAO.controller.js'

const router = express.Router()

router.get('/:id?', productDAOController.getProducts)

router.post('/', productDAOController.createProduct)

router.delete('/:id', productDAOController.deleteProduct)

router.put('/:id', productDAOController.updateProduct)


export default router