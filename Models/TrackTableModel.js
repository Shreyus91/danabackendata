import mongoose from 'mongoose'

const tracktableSchema = mongoose.Schema({
    Track: { type: String, required: true },
    BareDrawingNumber: { type: String, required: true },
    OtoO: { type: String, required: true },
    OAII: { type: String, required: true },
})

const tracktableData = mongoose.model("tracktableData", tracktableSchema)

export default tracktableData