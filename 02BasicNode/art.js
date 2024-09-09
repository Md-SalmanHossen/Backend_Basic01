
let figlet =require('figlet');

figlet('salman',function(err,data){
   if(err){
      console.log('something error'); 
      return;      
   }
   console.log(data);
})