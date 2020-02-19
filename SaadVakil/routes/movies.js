const express=require('express');
const router=express.Router();//creating router in express.

//API GET REQUEST
router.get('/',(req,res)=>{//creating an end point , APIs have its own endpoints.
    const movies=[{title:"Shawshank Redemption",rating:4.5},
    {title:"Fury",rating:4.7}];
    res.send(movies);
})

module.exports=router;
