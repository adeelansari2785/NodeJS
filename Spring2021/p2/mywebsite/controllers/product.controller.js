const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.viewall=(req,res)=>{
    Product.find((err,products)=>{
        if(!err){res.render('product',{page:'Product List',menuId:'list',products:products})}
        else{console.log('Error in retrieving products:'+JSON.stringify(err,undefined,2));}
    })
}

exports.create=(req,res)=>{
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })

}