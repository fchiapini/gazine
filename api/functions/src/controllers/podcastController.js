import podcastService from '../services/podcastService.js'

const search = async (req, res) => {
  const term = req.body.term
  const result = await podcastService.search(term)
  res.json(result.data)
}

export const podcastController = { search }
