import mongoose from 'mongoose'
import logger from '../utils/logger.js'

  ; (async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log('mongodb is connected to ', mongoose.connection.host)
      logger.info('conectado a mongodb')
    } catch (error) {
      logger.error('error al conectar a mongodb')
      console.log(error)
    }
  })()
