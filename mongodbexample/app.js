const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();

let port=1234;

const product=require('./routes/product.route');

//setup the connection with mongoose
mongoose.connect('mongodb://localhost/productsDb',{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.Promise=global.Promise;
let db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/products',product);
app.listen(port,()=>{
    console.log('Server is running at port:'+port);
});