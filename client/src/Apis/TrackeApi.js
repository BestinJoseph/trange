import axios from 'axios'

export const postDailyAct = async (activities) => await axios.post('http://localhost:8000/api/dailytracker', activities)
export const getDailyAct = async () => await axios.get('http://localhost:8000/api/dailytracker')