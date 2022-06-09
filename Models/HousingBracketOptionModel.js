import mongoose from 'mongoose'

const housingbracketoptionSchema = mongoose.Schema({
    PartNo: { type: String, required: true },
    BracketOption: { type: String, required: true },
    
})

const hboptionData = mongoose.model("hboptionData", housingbracketoptionSchema)

export default hboptionData