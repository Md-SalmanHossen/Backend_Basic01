
const express=require('express');
const app=express();

app.use(function(req,res,next){
   console.log('hello i am middleware');
   next();
})
app.use(function(req,res,next){
   console.log('hello i am middleware2');
   next();
})
app.use(function(req,res,next){
   console.log('hello i am middleware3');
   next();
})
app.get('/',function(req,res){
   res.send('hello world');
});
app.get('/profile',function(req,res){
   res.send('hello i am profile 🔥');
})
app.listen(3000);