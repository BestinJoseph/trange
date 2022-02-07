import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('nice to see you.')
})

router.get('/about', (req, res) => {
    res.send('welcome to our profile page.')
})

export default router