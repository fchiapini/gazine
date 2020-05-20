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
  async search(term) {
    const uri = encodeURI(
      `/search?term=${term}&media=podcast&attribute=titleTerm&entity=podcast`
    )

    const result = await apiClient.get(uri)
    const podcasts = result.data.results.filter((podcast) =>
      podcast.hasOwnProperty('feedUrl')
    )
    return podcasts
  },

  async getPodcast(feedUrl) {
    const parser = new Parser()
    const feed = await parser.parseURL(feedUrl)
    return {
      title: feed.title,
      author: feed.itunes.author,
      description: feed.itunes.summary,
      image: feed.itunes.image,
      episodes: feed.items.slice(0, 10)
    }
  }
}
