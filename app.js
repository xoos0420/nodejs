const path = require('path')

const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);