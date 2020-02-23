const express=require('express');
const router=express.Router();//creating router in express.
const mongoose=require('mongoose');
const {Movie}=require("../models/movie");

//API GET REQUEST
router.get('/',(req,res)=>{

})

router.post('/',(req,res)=>{
    const movie=new Movie({
        title:req.body.title,
        ratings:req.body.ratings
    })
    movie.save();
    res.send(movie);
})

module.exports=router;
