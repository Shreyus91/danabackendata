import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    username: { type: String, required: true,unique:true },
    password: { type: String, required: true },
    isAdmin:{type:Boolean,default:false}
})

const userData = mongoose.model('userData', UserSchema)

export default userData