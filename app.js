const path = require('path')

const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public', )));

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Error'})
})

app.listen(3000);