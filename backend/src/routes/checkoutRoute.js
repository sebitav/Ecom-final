import express from 'express'
import checkoutController from '../controllers/checkout.controller.js'

const router = express.Router()

router.post('/', checkoutController.checkout )

export default router