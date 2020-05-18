import podcastService from '../services/podcastService.js'

const search = async (req, res) => {
  const term = req.query.term
  console.log(term)
  const result = await podcastService.search(term)
  res.json(result.data)
}

const getPodcast = async (req, res) => {
  const feedUrl = req.query.feedUrl
  const podcast = await podcastService.getPodcast(feedUrl)
  res.json(podcast)
}

export const podcastController = { search, getPodcast }
