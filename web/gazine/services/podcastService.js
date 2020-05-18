import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  search(term) {
    return apiClient.get('/api/podcast/search', { params: { term } })
  },

  getPodcast(feedUrl) {
    return apiClient.get('/api/podcast', { params: { feedUrl } })
  }
}
