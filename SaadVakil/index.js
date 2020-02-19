const express=require('express');
const app=express();
const movies=require('./routes/movies');

app.use(express.json());

app.use('/api/movies/',movies)

app.listen(3000,()=>{
    console.log("Server running at port 3000.");
});