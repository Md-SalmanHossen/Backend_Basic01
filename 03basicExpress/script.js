
const express =require('express');
const app =express();

app.use(function(req,res,next){
   console.log('this is middleware');
   next(); 
});

app.get('/profile',function(req,res){
   res.send('this is profile');
})


// app.get('/profile/hossen',function(req,res){
//    res.send('this is hossen')
// })

app.get('/profile/:username',function(req,res){
   res.send(`hello from ${req.params.username}`);
})

app.get('/',function(req,res){
   res.send('hey, this is express js')
})

app.listen(3000);