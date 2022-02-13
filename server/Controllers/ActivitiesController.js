import DailyTracker from '../Models/DailyTrackerModel.js'

export const postActivity = async (req, res) => {
    const data = await DailyTracker.create(req.body)
    res.json(data).status(200)
}

export const getAllTracker = async (req, res) => {
    const data = await DailyTracker.find().sort({createdAt: -1})
    res.json(data).status(200)
}