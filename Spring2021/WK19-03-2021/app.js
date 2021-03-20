const express=require('express');
const bodyParser=require('body-parser');
const product=require('./routes/product.route');
const mongoose=require('mongoose');

const app=express();

//---------------------MONGOOSE CONNECTION-------------------
mongoose.connect("mongodb://localhost/productsDb",{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to the Database');
})
.catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
      });
//---------------------MONGOOSE CONNECTION-------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//http://localhost:3000/products
app.use('/products',product);

app.listen(3000,()=>{console.log('Server is up and running on port 3000.')});