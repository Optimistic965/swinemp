const Pig = require('../models/pigs')

exports.redirectToShop = (req, res) => {
    res.redirect('/shop')
}

exports.homePage = async (req, res) => {
    Pig.findAll()
        .then((availableProducts) => {
            console.log(availableProducts)
            res.render('shop/productlist', { pageTitle: 'Marketplace', data: availableProducts})
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.getById = (req, res, next) => {
    const param = req.params.id
    res.redirect('/')
}