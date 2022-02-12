import axios from 'axios'

const api = 'https://whispering-tor-44978.herokuapp.com/api'

export const postDailyAct = async (activities) => await axios.post(`${api}/dailytracker`, activities)
export const getAllActivitiesApi = async () => await axios.get(`${api}/dailytracker`)
