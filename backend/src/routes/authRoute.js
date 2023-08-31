import express from 'express'
import passport from '../utils/passport.js'
import authController from '../controllers/auth.controller.js'

const router = express.Router()
const loginValidate = passport.authenticate('login', {failureRedirect: '/api/auth/failLogin'})
const registerValidate = passport.authenticate('register', {failureRedirect: '/api/auth/failRegister'})


 router.get('/checkUser', authController.checkUser)
 router.post('/login', loginValidate , authController.login)
 router.get('/logout', authController.logout)
 router.get('/failLogin', authController.failLogin)
 router.post('/register', registerValidate, authController.register )
 router.get('/failRegister', authController.failRegister)

export default router