import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

admin.initializeApp(functions.config().firebase)

require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Welcome to Gazine Api!'))

export const webApi = functions.https.onRequest(app)
