
import express from 'express'
import { getBracketoptionSearch } from '../Controller/BracketOptionController.js'
import { DeleteBrkFlgOption, GetBrkFlgOption, GetSingleBrkFlgOption, PostBrkFlgOption, UpdateBrkFlgOption } from '../Controller/BrkFlgOptionModel.js'

const BrkFlgOptionRouter = express.Router()

// Post route for break flange option

BrkFlgOptionRouter.post('/brkflgoptiondata', PostBrkFlgOption)

// get route for break flange option

BrkFlgOptionRouter.get('/brkflgoptiondata', GetBrkFlgOption)

// get single data for break flange option

BrkFlgOptionRouter.get('/brkflgoptiondata/:id', GetSingleBrkFlgOption)

// update data for break flange option

BrkFlgOptionRouter.put('/brkflgoptiondata', UpdateBrkFlgOption)

// delete data for break flange option

BrkFlgOptionRouter.put('/brkflgoptiondatadelete',DeleteBrkFlgOption)

// search
BrkFlgOptionRouter.get('/dsearch',getBracketoptionSearch)
export default BrkFlgOptionRouter