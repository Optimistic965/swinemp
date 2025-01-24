exports.redirectToShop = (req, res) => {
    res.redirect('/shop')
}

exports.homePage = (req, res) => {
    res.render('shop', { pageTitle: 'Marketplace'})
}