const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error.js')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes= require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public', )));

app.use('/admin', adminRoutes);
app.use(shopRouter);

app.use(errorController.gett404);

app.listen(3000);