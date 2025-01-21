const express = require('express');
const path = require('path')
// const bodyParser = require('body-parser')

const rootdir = require('./util/path')

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }))

const shopRouter = require('./routes/shop')
const adminRouter = require('./routes/admin')

app.use(adminRouter)
app.use(shopRouter)

app.use((req, res) => {
    res.status(404).sendFile(path.join(rootdir, 'views', 'not-found.html'))
})

app.listen(3000);