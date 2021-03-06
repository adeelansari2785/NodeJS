const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const product=require('./routes/product.routes');
// initialize our express app
const app = express();


// Set up mongoose connection
mongoose.connect("mongodb://localhost/productsDb", {useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products',product);

app.listen(3000, () => {
    console.log('Server is up and running on port number 3000');
});