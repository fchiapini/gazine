import * as express from 'express'
import { podcastController } from '../controllers/podcastController.js'

const router = express.Router()

router.get('/podcast/search', podcastController.search)

// router.get('/podcast/', podcastController.getPodcast)

export { router }
