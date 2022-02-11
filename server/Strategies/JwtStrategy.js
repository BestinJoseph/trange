import passport from "passport"
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"

import User from '../Models/UserModel.js'

const opt = {}
opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opt.secretOrKey = process.env.JWT_SECRET

passport.use( new JwtStrategy(opt, (jwt_payload, done) => {
    User.findOne({ _id: jwt_payload._id}, (err, user) => {
        if (err) {
            return done(err, false)
        }
        if (user) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    })    
}))