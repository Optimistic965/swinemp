const express = require('express')
const path = require('path')

const rootdir = require('../util/path')

const router = express.Router()
const products = []

router.post('/product', (req, res) => {
    products.push({ id: products.length, ...req.body })
    res.redirect('/')
})
router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootdir, 'views' ,'add-product.html'))
})

exports.route = router
exports.product = products