const express=require('express');
const router=express.Router();

const emp_controller=require('../controllers/employee.controller');

router.get('/',emp_controller.emp_list);
router.post('/',emp_controller.emp_create);
router.get('/:id',emp_controller.emp_byID);
router.put('/:id',emp_controller.emp_update);
router.delete('/:id',emp_controller.emp_delete);

module.exports=router;