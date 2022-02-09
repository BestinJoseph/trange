import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'

import publics from './Routers/public.js'
import dailytracker from './Routers/DailyTracker.js'
import './Utiles/db.js'

dotenv.config()

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', publics)
app.use('/api', dailytracker)

app.listen(port, () => console.log('runnings'))