const express = require('express')
const path = require('path')

const rootdir = require('../util/path')

const router = express.Router()

router.post('/product', (req, res) => {
    products.push({ id: products.length, ...req.body })
    res.redirect('/')
})
router.get('/add-product', (req, res) => {
    res.render('add-product')
})

module.exports = router