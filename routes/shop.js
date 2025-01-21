const express = require('express')
const path = require('path')

const rootdir = require('../util/path')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.sendFile(path.join(rootdir, 'views' ,'myshop.html'))
})

module.exports = routes