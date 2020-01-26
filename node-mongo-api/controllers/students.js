const express=require("express");
const mongoose=require("mongoose");

const router=express.Router();
const StudentModel=mongoose.model("student")//the name has to be the same as in model/student.model.js

router.get("/list",(req,res)=>{//url is: http://localhost:3000/students/list
    //setting 
    /*var student=new StudentModel();
    student.firstname="Dr. Luthar";
    student.last_name="Jose";
    student.gender="Male";
    student.city="PS";
    student.country="USA";
    student.save();
*/

    //Getting records
    StudentModel.find((err,docs)=>{//received documents are stored in docs variable
        if(!err){
            //console.log(docs);
            //res.send("Student Controller");
            res.render("list",{data:docs.map(doc=>doc.toJSON())});
            //return;
        }else{
            console.log(err);
            //return;
        }
    });
    //res.send("Student Controller");
});

module.exports=router;