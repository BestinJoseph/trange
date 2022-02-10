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
    const data = await DailyTracker.findOne({_id: req.params.id})
    res.json(data).status(200)
})

export default router