import mongoose from 'mongoose'

const brkflgoptionSchema = mongoose.Schema({
    BrkFlgOption: { type: String},
    FLOff: { type: String },
    OD: { type: String },
    Pilot: { type: String },
    InOD: { type: String },
    BCDiam: { type: String },
    Index: { type: String },
    Size: { type: String },
    Num: { type: String },
})

const brkflgoptionData = mongoose.model("brkflgoptionData", brkflgoptionSchema)

export default brkflgoptionData