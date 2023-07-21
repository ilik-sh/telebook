
// import database from './db.js'
// import models from "./models/models"
// import cors from 'cors'
// import router from './routes'
// import errorHandlingMiddleware from './middleware/errorHandlingMiddleware'
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const database = require('./db')
const models = require('./models/models')
const router = require('./routes/index')
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware')

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandlingMiddleware)

const start = async () => {
    try {
        await database
    .authenticate()
        await database
    .sync()
        app.listen(PORT, () => {console.log(`Hello, ${PORT}`)})
    } catch (error) {
        console.error('Unable to connect', error)
    }
}

start() 

