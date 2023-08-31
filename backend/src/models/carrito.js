import mongoose from 'mongoose'

const carritoSchema = new mongoose.Schema({
   nombre: String,
   productos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'producto'
   }],
   timestamp: {type: Date, default: Date.now()}
})

const Carrito = mongoose.model('carrito',carritoSchema)

export default Carrito