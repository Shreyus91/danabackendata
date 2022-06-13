import express from 'express'
import { DeleteBareDrawingNumberData, GetAllBareDrawingNumber, getBareDrawingSearch, GetSingleBareDrawingData, PostBareDrawingNumber, UpdateBareDrawingNumberData } from '../Controller/BareDrawingNumberController.js'

const BareDrawingNumberRouter = express.Router()

// post bare drawing number routes

BareDrawingNumberRouter.post('/baredrawingnumberdata', PostBareDrawingNumber)


// get All Data successfully

BareDrawingNumberRouter.get('/baredrawingnumberdata', GetAllBareDrawingNumber)

// get single bare drawing number

BareDrawingNumberRouter.get('/baredrawingnumberdata/:id', GetSingleBareDrawingData)

// update data bare drawing number

BareDrawingNumberRouter.put('/baredrawingnumberdata', UpdateBareDrawingNumberData)

// delete bare drawing Number

BareDrawingNumberRouter.put('/baredrawingnumberdatadelete',DeleteBareDrawingNumberData)

// search
BareDrawingNumberRouter.get('/bsearch',getBareDrawingSearch)
export default BareDrawingNumberRouter