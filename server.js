import express from 'express'
import connectDatabase from './config/MongoDb.js'
import BrkFlgOptionRouter from './Routes/BrkFlgOptionRoutes.js'
import DowellRouter from './Routes/DowellRoutes.js'
import halfoptionRoute from './Routes/HalfoptionRouter.js'
import HousingBracketDataRouter from './Routes/HousingBracketOptionRoutes.js'
import trackTableRouter from './Routes/TrackTableRouter.js'
import BracketOptionRouter from './Routes/BracketOptionRoutes.js'
import BareDrawingNumberRouter from './Routes/BareDrawingNumberRoutes.js'
import ABSRouter from './Routes/ABSRoutes.js'
import BuildSheetDataRouter from './Routes/BuildSheetData.js'
import userRouter from './Routes/userRoutes.js'
import cors from 'cors'
const app = express()


    app.use(cors())
app.use(express.json())

connectDatabase()


app.get('/', (req, res) => {
    res.send('Dana New App is connected')
})






// Tracktable Data 
app.use('/api', trackTableRouter)
// halfoption data api
app.use('/api',halfoptionRoute)
// housingbracketoption data api
app.use('/api', HousingBracketDataRouter)
// dowell data api
app.use('/api', DowellRouter)

// break flange option data api

app.use('/api', BrkFlgOptionRouter)

// bracket option data api

app.use('/api', BracketOptionRouter)

// Bare Drawing data api

app.use('/api', BareDrawingNumberRouter)

// abs Router data api

app.use('/api',ABSRouter)

// buildsheet data api

app.use('/api', BuildSheetDataRouter)

// user Data api

app.use('/api',userRouter)






app.listen(3001,console.log('server is running on port 3001'))