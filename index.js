const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
const port = 3001

//mongo connection
require('./connection/connectionDb')

//routes
const experiencesRoutes = require('./routes/experiences')
const bookingRoute = require('./routes/booking')

app.use('/experiences', experiencesRoutes)
app.use('/booking', bookingRoute)
/*sample endpoints
    - Localhost:3001/experiences/all
    - Localhost:3001/experiences/top5
    - Localhost:3001/experiences/detail/1
    
*/
app.listen(port, ()=>{
    console.log(`server running ${port}`)
})