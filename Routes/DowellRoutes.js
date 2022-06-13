import express from 'express'
import { DowellDelete, DowellGet, DowellGetSingle, DowellPost, DowellUpdate, getDowellSearch } from '../Controller/DowelController.js'

const DowellRouter = express.Router()

// create Dowell router
DowellRouter.post('/dowelldata', DowellPost)

// Read dowell router
DowellRouter.get('/dowelldata', DowellGet)

// Read single data

DowellRouter.get('/dowelldata/:id', DowellGetSingle)

// update data

DowellRouter.put('/dowelldata', DowellUpdate)

// delete data

DowellRouter.put('/dowelldatadelete', DowellDelete)

// search router

DowellRouter.get('/mearch',getDowellSearch)


export default DowellRouter