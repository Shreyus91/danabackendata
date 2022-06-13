import express from 'express'
import { DeleteabsDataData, getAbsSearch, GetAllabsData, GetSingleAbsData, PostabsData, UpdateabsDataData } from '../Controller/ABSController.js'

const ABSRouter = express.Router()

// post bare drawing number routes

ABSRouter.post('/absdata', PostabsData)


// get All Data successfully

ABSRouter.get('/absdata', GetAllabsData)

// get single bare drawing number

ABSRouter.get('/absdata/:id', GetSingleAbsData)

// update data bare drawing number

ABSRouter.put('/absdata', UpdateabsDataData)

// delete bare drawing Number

ABSRouter.put('/absdatadelete', DeleteabsDataData)

// search
ABSRouter.get('/asearch',getAbsSearch)


export default ABSRouter