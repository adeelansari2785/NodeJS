var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { //http://localhost:3000/
  res.render('index', { page:'Home', menuId:'home' });
});

module.exports = router;
