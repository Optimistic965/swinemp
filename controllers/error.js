exports.return404 = (req, res) => {
    res.status(404).render('not-found', { pageTitle: "Page not found" })
}