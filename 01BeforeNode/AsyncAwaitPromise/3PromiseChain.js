function async(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('some data 1');
        resolve('some resolve success')
      },5000)
    })
}
async()
.then((res)=>{
  console.log(res);
})
.then((res)=>{
    console.log('solve');
})