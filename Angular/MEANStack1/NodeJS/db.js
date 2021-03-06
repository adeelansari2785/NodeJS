const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRUDDB1',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log('MongoDB Connection succeeded.');
    }else{
        console.log('Error in DB Connection:'+JSON.stringify(err,undefined,2))
    }
});

mongoose.set('useFindAndModify', false);//to avoid deprecated warnings
module.exports=mongoose;