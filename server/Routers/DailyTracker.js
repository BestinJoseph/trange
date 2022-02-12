import express from 'express'
const router = express.Router()
import DailyTracker from '../Models/DailyTrackerModel.js'

router.post('/dailytracker', async (req, res) => {
    const data = await DailyTracker.create(req.body)
    console.log(data)
    res.json(data).status(200)
})

router.get('/dailytracker', async (req, res) => {
    const data = await DailyTracker.find({})
    res.json(data).status(200)
})

router.get('/dailytracker/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid('5c0a7922c9d89830f4911426')) {
        return res.json({ errors: 'Not a valid employee ID', success: false}).status(500)
    }
    const data = await DailyTracker.findOne({_id: req.params.id})
    res.json(data).status(200)
})

export default router