const express = require('express')
const path = require('path')

const rootdir = require('../util/path')

const { product } = require('./admin')

const routes = express.Router()

routes.get('/', (req, res) => {
    console.log('avaliable', product)
    // res.sendFile(path.join(rootdir, 'views' ,'myshop.html'))
    res.render('shop')
})

module.exports = routes