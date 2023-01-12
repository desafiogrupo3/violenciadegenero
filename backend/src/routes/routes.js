const express = require('express')
const { addLocation, deleteAllLocations } = require ('../controllers/locations.controller')

const api = express.Router()

api.post('/addLocation', addLocation)
api.post('/deleteAllLocations', deleteAllLocations)

module.exports = api