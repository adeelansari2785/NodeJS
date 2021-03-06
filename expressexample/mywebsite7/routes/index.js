var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { //http://localhost:3001
  res.render('index', { page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) { //http://localhost:3001/about
  res.render('about', { page:'About Us', menuId:'about'});
});

router.get('/contact', function(req, res, next) { //http://localhost:3001/contact
  res.render('contact', { page:'Contact Form', menuId:'contact'});
});

module.exports = router;
