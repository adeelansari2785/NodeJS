const express=require('express');
const router=express.Router();

const user_controller=require('../controllers/user.controller');

//login page
router.get('/login', user_controller.fetchloginform);
router.post('/login', user_controller.loginchk);

//call the redirectLogin method in usercontrollers, to redirect to login page if session does not exist.
router.get('/dashboard', user_controller.redirectLogin,user_controller.dashboard);
router.get('/logout', user_controller.redirectDashboard,user_controller.logout);
module.exports=router;