import mongoose from 'mongoose'


const BuildSheetSchema = mongoose.Schema({
    AxleHousingPartNo: { type: String, required: true ,unique:true },
    ServiceHousing:{type:String},
    Model:{type:String},
    OriginalWorkOrder:{type:String},
    BareHousingDrawingNumber:{type:String},
    HousingHalfOption:{type:String},
    BrakeFlangeOption:{type:String},
    TrackWidth:{type:String},
    AbsOption:{type:String},
    DiffLockOption:{type:String},
    InductionHardeningOption:{type:String},   
    DowellPinOption:{type:String},   
    VentHoleOption:{type:String},   
    BracketDrawingNumber:{type:String},   
    BracketOption:{type:String},   
    Comments:{type:String},   
    RevWO:{type:String},   
    Rev:{type:String},   
    Description:{type:String},   
    RevBy:{type:String},   
    ChkBy: { type: String },  
    RevDate: { type: String } 
    
},{strict: true})

const BuildSheetData = mongoose.model("BuildSheetData", BuildSheetSchema)

export default BuildSheetData