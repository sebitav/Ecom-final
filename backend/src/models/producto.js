import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema({
   nombre: String,
   descripcion: String,
   codigo: String,
   foto: String,
   precio: String,
   stock: String,
   timestamp: {type: Date, default: Date.now()}
})

const Producto = mongoose.model('producto',productoSchema)

export default Producto