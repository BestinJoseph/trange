import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Session = mongoose.Schema({
    refreshToken: {
        type: String,
        default: ""
    }
})

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        default: '',
    },
    lastName: {
        type: String,
        default: ''
    },
    authStrategy: {
        type: String,
        default: 'local'
    },
    points: {
        type: Number,
        default: 50
    },
    refreshToken: {
        type: [Session]
    }
})

userSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        delete ret.refreshToken
        return ret
    }
})

userSchema.plugin(passportLocalMongoose, {usernameField: 'username'})

export default mongoose.model('User', userSchema)