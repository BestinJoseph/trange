import mongoose from 'mongoose'

const dailyTrackerSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true,
        min: [8, 'To few for a name.']
    },
    project: {
        type: String,
        require: true,
        min: [4, 'To few for project name.']
    },
    department: {
        type: String,
        require: true,
    },
    activities: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true,
    },
    createdOn: {
        type: Date,
        require: Date.now
    }
},{timestamps: true})

export default mongoose.model('dailytracker', dailyTrackerSchema)