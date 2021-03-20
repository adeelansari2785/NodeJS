var express=require('express')
var router=express.Router()

//http://localhost:3000/Students/
router.get('/',(req,res)=>{
    res.send('Welcome to my home page')
})

//http://localhost:3000/Students/about
router.get('/about',(req,res)=>{
    res.send('Welcome to the About page')
})


module.exports=router