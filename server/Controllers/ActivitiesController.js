import DailyTracker from '../Models/DailyTrackerModel.js'

export const postActivity = async (req, res) => {
    const data = await DailyTracker.create(req.body)
    res.json(data).status(200)
}

export const getAllTracker = async (req, res) => {
    const data = await DailyTracker.find().sort({createdAt: -1})
    res.json(data).status(200)
}

export const getOneTracker = async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const data = await DailyTracker.findOne({_id: req.params.id})
        res.json(data).status(200)
    } else {
        return res.json({ errors: 'Not a valid employee ID', success: false}).status(500)
    }
}

export const editTracker = async (req, res, next) => {
    DailyTracker.findByIdAndUpdate({_id: req.params.id}, {$set:{...req.body}}, {new: true}, (err, track) => {
        if(err) {
            res.json({ errors: err.msg, success: false}).status(500)
        } else {
            res.status(200).json({errors: null, success: true, track})
        }
    })
}