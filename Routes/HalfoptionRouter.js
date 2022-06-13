import express from 'express'
import { getHalfoptionSearch, HalfoptionControllerCreate, HalfoptionControllerDelete, HalfoptionControllerRead, HalfOptionControllerSingle, HalfoptionControllerUpdate } from '../Controller/HalfoptionController.js'
import halfoptionData from '../Models/HalfOptionModel.js'

const halfoptionRoute = express.Router()

// create half option route data

halfoptionRoute.post('/hafoptiondata',HalfoptionControllerCreate)

//  Read half option data
halfoptionRoute.get('/hafoptiondata', HalfoptionControllerRead)

// update halfoption data

halfoptionRoute.put('/hafoptiondata', HalfoptionControllerUpdate)

// delete half option data

halfoptionRoute.put('/hafoptiondatadelete', HalfoptionControllerDelete)


// half option single data found routes

halfoptionRoute.get('/hafoptiondata/:id',HalfOptionControllerSingle)

// search
halfoptionRoute.get('/fsearch',getHalfoptionSearch)
export default halfoptionRoute