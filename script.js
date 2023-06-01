const express=require('express');
const bodyParser=require('body-parser');

const app=express();


app.use(bodyParser.urlencoded({extended:true}));

app.use('/add-product',(req,res,next)=>{
    res.send(`<form action="/product" method="POST"><input type="text" placeholder="Product Name" name="product"></input><input type="number" placeholder="Size" name="size"></input><button type="submit">Submit</button></form>`);
    
});

app.use('/product',(req,res,next)=>{
   
    console.log(req.body);
    
});


app.listen(3000);