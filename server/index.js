const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//Callback function from a controller
const {getHouses,createHouse,updateHouse,deleteHouse} = require('./controller.js')


//endpoint here:
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(4004, () => console.log('Server running on 4004'))