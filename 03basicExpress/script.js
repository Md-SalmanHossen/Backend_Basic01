
const express =require('express');
const app =express();

app.get('/',function(req,res){
   res.send('hey, this is express js')
})
app.listen(3000);