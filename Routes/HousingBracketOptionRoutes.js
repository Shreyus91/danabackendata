import express from 'express'
import { housingBracketOptionControllerCreate, housingBracketOptionControllerDelete, housingBracketOptionControllerRead, housingBracketOptionControllerSingle, housingBracketOptionControllerUpdate } from '../Controller/HousingBracketOptionController.js'


const HousingBracketDataRouter = express.Router();


// create housing bracket option data router for post data
HousingBracketDataRouter.post('/housingbracketoptiondata',housingBracketOptionControllerCreate)

// get all data from housing option data 
HousingBracketDataRouter.get('/housingbracketoptiondata',housingBracketOptionControllerRead)

// get single data

HousingBracketDataRouter.get('/housingbracketoptiondata/:id',housingBracketOptionControllerSingle)

// update data

HousingBracketDataRouter.put('/housingbracketoptiondata',housingBracketOptionControllerUpdate)

// delete data

HousingBracketDataRouter.put('/housingbracketoptiondatadelete',housingBracketOptionControllerDelete)

export default HousingBracketDataRouter