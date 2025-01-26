const Pig = require('../models/pigs')

exports.redirectToShop = (req, res) => {
    res.redirect('/shop')
}

exports.homePage = (req, res) => {
    Pig.getAll((availableProducts) => {
        res.render('shop/productlist', { pageTitle: 'Marketplace', data: availableProducts})
    })
}

exports.getById = (req, res, next) => {
    const param = req.params.id
    res.redirect('/')
}