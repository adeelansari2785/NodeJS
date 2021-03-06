const express=require('express');
const bodyParser=require('body-parser');
const product=require('./routes/product.route');
const mongoose=require('mongoose');

const app=express();
let port=1234;

mongoose.connect('mongodb://localhost:27017/productsDb',{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products',product);

app.listen(port, ()=>{console.log("Server is up and running on port:"+port)});