import express from 'express'
const router = express.Router()
import DailyTracker from '../Models/DailyTrackerModel.js'
import mongoose from 'mongoose'
import { postActivity, getAllTracker } from '../Controllers/ActivitiesController.js'

router.route('/dailytracker').post(postActivity)

router.route('/dailytracker').get(getAllTracker)

router.get('/dailytracker/:id', async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const data = await DailyTracker.findOne({_id: req.params.id})
        res.json(data).status(200)
    } else {
        return res.json({ errors: 'Not a valid employee ID', success: false}).status(500)
    }
})

export default router