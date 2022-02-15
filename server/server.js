import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import cookieParser from 'cookie-parser'

import publics from './Routers/public.js'
import users from './Routers/UserRoutes.js'
import './Utiles/db.js'
import './Strategies/JwtStrategy.js'
import './Strategies/LocalStrategy.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use('/', publics)
app.use('/api', users)

app.listen(port, () => console.log('runnings'))