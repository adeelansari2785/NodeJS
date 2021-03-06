const express=require('express');
const router=express.Router();

const product_controller=require('../controllers/product.controller');

router.post('/create',product_controller.product_create); // perform insert operation
router.get('/createform',product_controller.product_formcreate);//load insert form

router.get('/list',product_controller.product_list); //get all docs

router.post('/:id/delete',product_controller.product_delete); //this route performs the delete operation

router.post('/:id/update',product_controller.product_update); //this route performs update operation
router.post('/updateform/:id',product_controller.product_updateform); //this route gets the page for update

module.exports=router;