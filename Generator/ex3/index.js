//index.js

// Imports
const express = require('express');
const bodyParser=require('body-parser');
const models = require('./models');
// Initial Config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/customer', require('./crud')(models.Customers));

// Server
app.listen(port, () => console.log(`Listening on port ${port}`));