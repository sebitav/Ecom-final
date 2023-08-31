import twilio from 'twilio'
import dotenv from 'dotenv'
import logger from './logger.js'

dotenv.config()

const client = twilio(process.env.SID_TWILIO, process.env.TOKEN_TWILIO)

export const sendMsg = async (body, to) => {
  try {
    const message = {
      body: body,
      from: `+${process.env.SMS_ADMIN}`,
      to: `+${to}`,
    };
    const response = await client.messages.create(message);
    logger.info(response);
  } catch (error) {
    logger.error(error);
  }
}

export const sendWp = async (body, to) => {
  try {
    const message = {
      body,
      from: `whatsapp:+${process.env.ADMIN_WP}`,
      to: `whatsapp:+5491167231003`
    };
   
    const response = await client.messages.create(message);
    logger.info(response);
  } catch (error) {
    logger.error(error);
  }
}