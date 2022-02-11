import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.set('bufferCommands', false)

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

export default await mongoose.connect(process.env.DB_URL, options)
