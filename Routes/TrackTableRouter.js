import express from 'express'
import { TrackTableControllerRead, TracktableControllersCreate, TrackTableControllerSingleRead, TrackTableControllerUpdate, trackTableDataControllerDelete } from '../Controller/TrackTableController.js';



const trackTableRouter = express.Router();


// create track table
trackTableRouter.post('/tracktabledata',
TracktableControllersCreate
)

// read track table data

trackTableRouter.get('/tracktabledata',
TrackTableControllerRead
)

// read single data

trackTableRouter.get('/tracktabledata/:id',TrackTableControllerSingleRead)

// update track table data

trackTableRouter.put('/tracktabledata',TrackTableControllerUpdate)

//  delete tracktable data

trackTableRouter.put('/tracktabledata/delete',trackTableDataControllerDelete)

export default trackTableRouter