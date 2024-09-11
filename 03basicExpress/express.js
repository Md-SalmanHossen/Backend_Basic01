
const express =require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
   // res.render('index')
   throw Error('i do not know')
})
app.get('/contact',function(req,res){
   res.render('contact',{name:'salman'})
})
app.get('/about',function(req,res){
   res.render('about')
})
app.get('/error',function(req,res,next){
   throw Error('something went wrong')
})

app.set('view engine','ejs');
app.use(express.static('./public'));

app.use(function errorHandler (err, req, res, next) {
   if (res.headersSent) {
     return next(err)
   }
   res.status(500)
   res.render('error', { error: err })
 })

app.listen(3000)