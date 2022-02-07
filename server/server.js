import express from "express"

import publics from './Routers/public.js'

const app = express()
const router = express.Router()
const port = 8000

app.use('/', publics)

app.listen(port, () => console.log('runnings'))