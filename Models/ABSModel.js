import mongoose from 'mongoose'

const absSchema = mongoose.Schema({
    ABS: { type: String, required: true },
    BareDrawingNumber: { type: String, required: true },
    Block: { type: String, required: true },
    BlIndex: { type: String, required: true },
    SOFf: { type: String, required: true },
})

const absData = mongoose.model("absData", absSchema)

export default absData