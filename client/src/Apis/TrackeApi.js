import axios from 'axios'

const api = 'https://whispering-tor-44978.herokuapp.com/api'
// const api = 'http://localhost:8000/api'

export const postDailyAct = async (activities) => await axios.post(`${api}/dailytracker`, activities)
export const getAllActivitiesApi = async () => await axios.get(`${api}/dailytracker`)
export const putActivityApi = async (id, act) => await axios.put(`${api}/dailytracker/${id}/edit`, act)
