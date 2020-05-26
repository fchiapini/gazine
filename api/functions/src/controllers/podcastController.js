import podcastService from '../services/podcastService.js'

const search = async (req, res) => {
  const term = req.query.term
  try {
    const result = await podcastService.search(term)
    res.json(result)
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error
    })
  }
}

const getPodcast = async (req, res) => {
  const feedUrl = req.query.feedUrl

  try {
    const buffer = Buffer.from(feedUrl, 'base64')
    const decodedFeedUrl = buffer.toString('utf-8')

    const podcast = await podcastService.getPodcast(decodedFeedUrl)
    res.json(podcast)
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error
    })
  }
}

export const podcastController = { search, getPodcast }
