import axios from "axios"

// const api = 'https://whispering-tor-44978.herokuapp.com/api'
const api = 'http://localhost:8000/api'

export const isSignInUser = (user) => axios.post(`${api}/signin`, user)

export const isSingOffUser = async () => await axios.get(`${api}/signoff`)