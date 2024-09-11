
const express =require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
   res.render('index')
})
app.get('/contact',function(req,res){
   res.render('contact',{name:'salman'})
})
app.get('/about',function(req,res){
   res.render('about')
})

app.set('view engine','ejs');
app.use(express.static('./public'));

app.listen(3000)