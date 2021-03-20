const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const product=require('./routes/product.route');

const app=express();

mongoose.connect("mongodb://localhost/productsDb",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{console.log('Connected to the Database.');})
.catch(err =>{console.log("Cannot connec to the Database",err); process.exit();});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/products',product);
let port=1234;

app.listen(port, ()=>{console.log('Server is up and running on port:'+port);})