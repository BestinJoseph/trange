import express from 'express'
const router = express.Router()
import DailyTracker from '../Models/DailyTrackerModel.js'
import mongoose from 'mongoose'
import { postActivity, getAllTracker, getOneTracker, editTracker } from '../Controllers/ActivitiesController.js'

router.route('/dailytracker').post(postActivity)

router.route('/dailytracker').get(getAllTracker)

router.route('/dailytracker/:id').get(getOneTracker)

router.route('/dailytracker/:id/edit').put(editTracker)

export default router