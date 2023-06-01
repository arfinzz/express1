const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("Inside 1st Middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("Inside 2nd Middleware");
    res.send("<h1>Hello world</h1>");
});


app.listen(3000);