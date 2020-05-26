import axios from 'axios'
import Parser from 'rss-parser'

const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': process.env.BASE_URL,
    'Access-Control-Allow-Methods': 'GET'
  }
})

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

const onlyWithFeedUrl = (podcast) =>
  Object.prototype.hasOwnProperty.call(podcast, 'feedUrl')

const normalizePodcast = (podcast) => {
  return {
    title: podcast.collectionName,
    author: podcast.artistName,
    image: podcast.artworkUrl600,
    feedUrl: podcast.feedUrl
  }
}

export default {
  async search(term) {
    try {
      const uri = encodeURI(
        `/search?term=${term}&media=podcast&attribute=titleTerm&entity=podcast`
      )
      const result = await apiClient.get(uri)
      const podcasts = result.data.results
        .filter(onlyWithFeedUrl)
        .map(normalizePodcast)
      return podcasts
    } catch (error) {
      throw new Error(error)
    }
  },

  async getPodcast(feedUrl) {
    try {
      const buffer = Buffer.from(feedUrl, 'base64')
      const decodedFeedUrl = buffer.toString('utf-8')
      const parser = new Parser()
      const feed = await parser.parseURL(CORS_PROXY + decodedFeedUrl)
      return {
        title: feed.title,
        author: feed.itunes.author,
        description: feed.itunes.summary,
        image: feed.itunes.image,
        episodes: feed.items.slice(0, 10)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
