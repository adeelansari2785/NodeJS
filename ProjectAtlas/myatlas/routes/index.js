var express = require('express');
var router = express.Router();
var book_controller=require('../controllers/book.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId:'home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { page: 'About Us', menuId:'about' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { page: 'Contact', menuId:'contact' });
});
//------------crud operation routes are here--------------------
//route that will show all products
router.get('/list',book_controller.book_list);

//route that will show the insert form
router.get('/createform',book_controller.book_formcreate);
//this route will perform the insert operation
router.post('/create',book_controller.book_create);

//delete operation
router.post('/:id/delete',book_controller.book_delete);

//call the update form
router.post('/updateform/:id', book_controller.book_updateform);
router.post('/:id/update', book_controller.book_update)


module.exports = router;
