const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const product=require('./routes/product.route');

let port=1234;

//mongoose connection here
mongoose.connect("mongodb://localhost/productsDb",{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.Promise=global.Promise;
let db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDb connection error:'));

//for bodyparser to handle the request.body part
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/products',product);

app.listen(port, ()=>{
    console.log('Server is running at port:'+port);
});