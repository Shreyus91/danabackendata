import mongoose from 'mongoose'

const halfoptionSchema = mongoose.Schema({
    HalfOption: { type: String},
    Wall: { type: String },
})

const halfoptionData = mongoose.model("halfoptionData", halfoptionSchema)

export default halfoptionData