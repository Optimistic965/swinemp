const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const rootdir = require('./util/path')
const shopController = require('./controllers/shop')
const errorController = require('./controllers/error')
const shopRouter = require('./routes/shop')
const adminRouter = require('./routes/admin')

const app = express();

// setting the templating engine
app.set('view engine', 'ejs')
app.set('views', path.join(rootdir, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(rootdir))

// App routes
app.use('/admin', adminRouter)
app.use('/shop', shopRouter)

// redirect to landing page
app.get('/', shopController.redirectToShop)

// manage 404
app.use(errorController.return404)

app.listen(3000);