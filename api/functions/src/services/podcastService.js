import axios from 'axios'
import * as Parser from 'rss-parser'

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
    const uri = encodeURI(
      `/search?term=${term}&media=podcast&attribute=titleTerm&entity=podcast`
    )
    return apiClient.get(uri)
  },

  async getPodcast(feedUrl) {
    const parser = new Parser()
    const feed = await parser.parseURL(feedUrl)
    return {
      title: feed.title,
      author: feed.itunes.author,
      description: feed.description,
      image: feed.image,
      episodes: feed.items.slice(0, 10)
    }
  }
}