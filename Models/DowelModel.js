import mongoose from 'mongoose'

const DowelSchema = mongoose.Schema({
    Dowel: { type: String },
    DowelPN: { type: String },
    FTOff: { type: String },
    Spacing: { type: String },
})

const DowelData = mongoose.model("DowelData", DowelSchema)

export default DowelData