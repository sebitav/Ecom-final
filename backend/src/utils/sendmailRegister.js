import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import logger from './logger.js'

dotenv.config()

const transporterGmail = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.ADMIN_GMAIL, // sender mail
        pass: process.env.ADMIN_PASS, // password app - security
    }
})

const sendMail = async (user) => { 
  let maildata = `
  <h1>Se a Registrado un Nuevo Usuario en la WEB</h1>
  <br>
  <ul>
      <li>Nombre: ${user.nombre}</li>
      <li>Apellido: ${user.apellido}</li>
      <li>UserName: ${user.username}</li>
      <li>E-Mail: ${user.mail}</li>
      <li>Télefono: ${user.phone}</li>
  </ul>
  `
  const mailOptions = {
        from: `from SERVER <${process.env.ADMIN_GMAIL}>`,
        to: user.mail,
        subject: 'Nuevo Registro',
        html: maildata
    }

    await transporterGmail.sendMail(mailOptions, (err, info) => {
      if(err){
        logger.error('mail error', err)
      } else {
        logger.info(`mail enviado a ${user.mail} correctamente`)
      }
    })
}

export default sendMail