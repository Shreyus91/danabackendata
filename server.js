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
const app = express()
app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })

app.use(express.json())

connectDatabase()

app.get('/', (req, res) => {
    res.send('app is connected')
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

app.use('/api',BuildSheetDataRouter)






app.listen(3001,console.log('server is running on port 3001'))