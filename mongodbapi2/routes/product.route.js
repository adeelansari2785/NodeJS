const express=require('express');
const router=express.Router();

//include the product controller 
const product_controller=require('../controllers/product.controller');

//routing paths or endpoints
router.get('/test',product_controller.test);//localhost:1234/products/test
router.post('/create',product_controller.product_create);
router.get('/:id',product_controller.product_details);
router.put('/:id/update',product_controller.product_update);
router.delete('/:id/delete',product_controller.product_delete);
module.exports=router;