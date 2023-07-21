import express from 'express'
import cors from 'cors'
require('dotenv').config()

import database from './db'
import models from './models/models'
import router from './routes/index'
// import errorHandlingMiddleware from './middleware/errorHandlingMiddleware'

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// app.use(errorHandlingMiddleware)

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

