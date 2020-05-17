import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://itunes.apple.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  search(term) {
    return apiClient.get(
      `/search?term=${term}&media=podcast&attribute=titleTerm&entity=podcast`
    )
  }
}
