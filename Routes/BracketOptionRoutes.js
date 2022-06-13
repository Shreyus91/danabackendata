import express from 'express'
import { BracketOptionControllerPost, deleteBracketOptionData, GetAllBracketOptionData, getBracketoptionSearch, GetSingleBracketOptionData, UpdateBracketOptionData } from '../Controller/BracketOptionController.js'

const BracketOptionRouter = express.Router()

// post route for bracket option

BracketOptionRouter.post('/bracketoptiondata', BracketOptionControllerPost)

// get All bracket option data

BracketOptionRouter.get('/bracketoptiondata', GetAllBracketOptionData)

// get Single data from bracket option data

BracketOptionRouter.get('/bracketoptiondata/:id', GetSingleBracketOptionData)

// update bracket option data

BracketOptionRouter.put('/bracketoptiondata', UpdateBracketOptionData)

// delete bracket option data

BracketOptionRouter.put('/bracketoptiondatadelete',deleteBracketOptionData)

// search
BracketOptionRouter.get('/csearch',getBracketoptionSearch)
export default BracketOptionRouter