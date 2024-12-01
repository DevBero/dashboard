import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDb from './config/db'

dotenv.config()
const port = process.env.PORT || 5000


const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
connectDb()


app.listen(port, () => {
    console.log("Listening to port:", port)
})

