const express = require('express')
const path = require('path')

const shopController = require('../controllers/shop')

const routes = express.Router()

routes.get('/', shopController.homePage)

module.exports = routes