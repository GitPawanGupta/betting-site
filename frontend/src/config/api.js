import axios from 'axios'

// API base URL - uses environment variable in production, proxy in development
const API_URL = import.meta.env.VITE_API_URL || ''

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

export default api
