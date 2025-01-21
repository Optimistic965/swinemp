const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const rootdir = require('./util/path')

const app = express();

// setting the templating engine
app.set('view engine', 'pug')
app.set('views', path.join(rootdir, 'views'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(rootdir))

const shopRouter = require('./routes/shop')
const adminData = require('./routes/admin')

app.use('/admin' ,adminData.route)
app.use(shopRouter)

app.use((req, res) => {
    res.status(404).sendFile(path.join(rootdir, 'views', 'not-found.html'))
})

app.listen(3000);