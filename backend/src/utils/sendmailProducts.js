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

const sendMailProducts = async (productos, total, user) => {
  let maildata = ''
  for (const p of productos) {
    maildata  += `<h3>${p.nombre}</h3>
    <p>${p.descripcion}</p>
    <strong>${p.precio}</strong>
    <br>
    <hr>
    `
  }
  console.log({total})
  maildata += `<h2>total: $${total.toFixed(2)}</h2>`

  const mailOptions = {
        from: `from SERVER <${process.env.ADMIN_GMAIL}>`,
        to: user.mail,
        subject: `Nuevo pedido de ${user.nombre} ${user.apellido} - ${user.mail}`,
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

export default sendMailProducts