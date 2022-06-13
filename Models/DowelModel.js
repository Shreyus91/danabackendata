import mongoose from 'mongoose'

const DowelSchema = mongoose.Schema({
    Dowel: { type: String },
    DowelPN: { type: String },
    FTOff: { type: String },
    Spacing: { type: String },
})
DowelSchema.index({Dowel:'text'})
DowelSchema.index({DowelPN:'text'})
DowelSchema.index({FTOff:'text'})
DowelSchema.index({Spacing:'text'})
const DowelData = mongoose.model("DowelData", DowelSchema)

export default DowelData