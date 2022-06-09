import mongoose from 'mongoose'

const baredrawignoSchema = mongoose.Schema({
    
    BareDrawingNumber: { type: String, required: true },
    OtoO: { type: String, required: true },
    Intermediate : { type: String, required: true },
    RO: { type: String, required: true },
    Bowl : { type: String, required: true },
    Angle : { type: String, required: true },
    VOff: { type: String, required: true },
    VSize : { type: String, required: true },
})

const baredrawignoData = mongoose.model("baredrawignoData", baredrawignoSchema)

export default baredrawignoData