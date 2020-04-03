const express = require('@feathersjs/express')
const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio')
const cors = require('cors')
const routes = require('./routes')

const app = express(feathers())

app.use(cors())
app.use(express.json())

app.configure(socketio())

app.use(routes)