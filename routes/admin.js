const express = require('express')
const path = require('path')

const rootdir = require('../util/path')

const router = express.Router()

router.post('/product', (req, res) => {
    console.log(res.body)
    res.redirect('/')
})
router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootdir, 'views' ,'add-product.html'))
})

module.exports = router