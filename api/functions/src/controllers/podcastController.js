import podcastService from '../services/podcastService.js'

const search = async (req, res) => {
  const term = req.query.term
  console.log(term)
  const result = await podcastService.search(term)
  res.json(result)
}

const getPodcast = async (req, res) => {
  const feedUrl = req.query.feedUrl

  const buffer = Buffer.from(feedUrl, 'base64')
  const decodedFeedUrl = buffer.toString('utf-8')

  const podcast = await podcastService.getPodcast(decodedFeedUrl)
  res.json(podcast)
}

export const podcastController = { search, getPodcast }
