import axios from 'axios'

const api = axios.create({
    baseURL: 'https://6366972ef5f549f052c95eb5.mockapi.io/'
})

export default api