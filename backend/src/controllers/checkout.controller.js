import sendMailProducts from "../utils/sendmailProducts.js"
import {sendMsg, sendWp} from "../utils/twilio.js"

const checkout = (req, res) => {
  const info = 'su pedido fue realizado y esta en proceso de envio'
  const {productos, total} = req.body
  const user = req.user
  
  sendMailProducts(productos, total, user) //Envio de email al usuario que se registra
  // sendMailProducts(productos, total, admin.mail) //envio de email al administrador
  sendMsg(info, user.phone)
  sendWp(`nuevo pedido de ${user.nombre} ,mail: ${user.mail}`, user.phone) 
}

export default {checkout}