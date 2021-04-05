const Book=require('../models/book.model');

//this function will perform the INSERT Operations
exports.book_create=(req,res)=>{
    let book=new Book({
        title:req.body.title,
        isbn:req.body.isbn,
        longDescription:req.body.longDescription,
        status:req.body.status
    });

    book.save((err)=>{
        if(err){
            return next(err);
        }
        res.redirect('/list');
    });
}

//this function will load the INSERT Form, View to load
exports.book_formcreate=(req,res)=>{
    res.render('createform',{page:'New Book', menuId:'createform'})
}

//This function loadds the view and finds all the documents in the product collections
exports.book_list=(req,res)=>{
    Book.find((err,book)=>{
        if(err){
            return next(err);
        }
        res.render('list',{page:'List all Books',menuId:'list',book:book});
    });
}

//this function will perform the delete operation
exports.book_delete=(req,res)=>{
    Book.findByIdAndRemove(req.params.id,(err)=>{
        if(err) return next(err);
        res.redirect('/list');
    });
}

//this function will call the updateform view
exports.book_updateform=(req,res)=>{
    Book.findById(req.params.id,(err,book)=>{
        if(err) return next(err);
        res.render('updateform',{page:'Update Book',menuId:'updateform',book:book});
    })
}

//this function will perform the update operation
exports.book_update=(req,res)=>{
    Book.findByIdAndUpdate(req.params.id,{$set:req.body},(err,book)=>{
        if(err) return next(err);
        res.redirect('/list');
    })
}

