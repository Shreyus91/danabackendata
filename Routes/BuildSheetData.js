import express from 'express'
import { BuildSheetDataDelete, BuildSheetDataGet, BuildSheetDataGetSingle, BuildSheetDataPost, BuildSheetDataUpdate } from '../Controller/BuildSheetDataController.js'


const BuildSheetDataRouter = express.Router()

// create BuildSheetData router
BuildSheetDataRouter.put('/BuildSheetDatadataP', BuildSheetDataPost)

// Read BuildSheetData router
BuildSheetDataRouter.get('/BuildSheetDatadata', BuildSheetDataGet)

// Read single data

BuildSheetDataRouter.get('/BuildSheetDatadata/:id', BuildSheetDataGetSingle)

// update data

BuildSheetDataRouter.put('/BuildSheetDatadata', BuildSheetDataUpdate)

// delete data

BuildSheetDataRouter.put('/BuildSheetDatadatadelete',BuildSheetDataDelete)


export default BuildSheetDataRouter