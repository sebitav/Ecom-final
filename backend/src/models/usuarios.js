import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   username:{type: String, required: true},
   nombre:{type: String, required: true},
   apellido:{type: String, required: true},
   mail:{type: String, required: true},
   passwordHash: {type: String, required: true},
   phone: {type: String, required: true}
})

const userModel = mongoose.model('Usuario', userSchema)

export default userModel