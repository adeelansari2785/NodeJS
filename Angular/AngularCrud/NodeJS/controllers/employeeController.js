const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;//for handling object id
var {Employee}=require('../models/employee');

//http://localhost:3000/employees/
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){res.send(docs)}
        else{console.log('Error in retrieving Employees : '+JSON.stringify(err,undefined,2));}
    });
}); //get all the employees function

router.post('/',(req,res)=>{
    //console.log(req.body);
    var emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary        
    });
    emp.save((err,doc)=>{
        if(!err){res.send(doc)}
        else{console.log('Error in Employee Save : '+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else{console.log('Error in Retrieving Employee:'+JSON.stringify(err,undefined,2));}
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    var emp={
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
        if(!err){ res.send(doc);}
        else{console.log('Error in Updating Employee:'+JSON.stringify(err,undefined,2));}
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);   
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else{console.log('Error in Deleting Employee:'+JSON.stringify(err,undefined,2));}
    }); 
});
module.exports=router;