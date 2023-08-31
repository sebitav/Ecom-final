import express from 'express'
import { ProductController } from '../controllers/mockController/product.controller.js'

const router = express.Router()
const productController = new ProductController()

router.post('/', productController.createProducts)

export default router
