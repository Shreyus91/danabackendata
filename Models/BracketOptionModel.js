import mongoose from 'mongoose'

const bracketOptionSchema = mongoose.Schema({
    BracketOption: { type: String},
    TRod: { type: String },
    SArm: { type: String },
    LArm: { type: String },
})

const BracketOptionData = mongoose.model('bracketoptiondata', bracketOptionSchema)

export default BracketOptionData