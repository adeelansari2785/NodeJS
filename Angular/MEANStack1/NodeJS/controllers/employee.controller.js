const Employee=require('../models/employee.model');
var ObjectId=require('mongoose').Types.ObjectId; //for handling objectID

//this function will perform the insert operation
exports.emp_create=function(req,res){
    let employee=new Employee({
        name: req.body.name,
        designation: req.body.designation,
        department:req.body.department,
        office:req.body.office,
        salary:req.body.salary
    });

    employee.save(function(err,doc){
        if(!err){res.send(doc)}
        else{console.log('Error in Employee Save:'+JSON.stringify(err,undefined,2));}
    })
};

//this function will fetch all employee documents
exports.emp_list=function(req,res){
    Employee.find(function(err, docs){
        if(!err){res.send(docs)}
        else{console.log('Error in Retrieving Employees:'+JSON.stringify(err,undefined,2));}
    });
};

//this function will fetch employee by ID
exports.emp_byID=function(req,res){
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id:${req.params.id}`);

    Employee.findById(req.params.id,function(err, doc){
        if (!err) {res.send(doc)}
        else{console.log('Error in Retrieving Employee:'+JSON.stringify(err,undefined,2));}
    })
};

//this function will update the employee by ID
exports.emp_update=function(req,res){
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

    Employee.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, doc) {
        if (!err) {res.send(doc)}
        else{console.log('Error in Updating Employee:'+JSON.stringify(err,undefined,2));}
    });
};

//this function will remove the employee by ID
exports.emp_delete=function(req,res){
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);   

    Employee.findByIdAndRemove(req.params.id, function(err,doc){
        if(!err){ res.send(doc);}
        else{console.log('Error in Deleting Employee:'+JSON.stringify(err,undefined,2));}
    })
};