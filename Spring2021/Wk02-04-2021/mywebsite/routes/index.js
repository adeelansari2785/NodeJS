var express = require('express');
const product_controller=require('../controllers/product.controller');
var router = express.Router();

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
router.get('/list',product_controller.product_list);

//route that will show the insert form
router.get('/createform',product_controller.product_formcreate);
//this route will perform the insert operation
router.post('/create',product_controller.product_create);

//delete operation
router.post('/:id/delete',product_controller.product_delete);

//call the update form
router.post('/updateform/:id', product_controller.product_updateform);
router.post('/:id/update', product_controller.product_update)

module.exports = router;
