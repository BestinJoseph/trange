import axios from 'axios'

export const postDailyAct = async (activities) => await axios.post('/dailytracker', activities)
export const getAllActivitiesApi = async () => await axios.get('/dailytracker')
export const getOneDailyAct = async (_id) => await axios.get(`/dailytracker/${_id}`)
