


// .then => res
// /catch => err 

let getPromise=()=>{

  return new Promise((resolve,reject)=>{
    console.log('some error occurred');
    //resolve('success');
    reject('network error')
  })

}

let promise= getPromise();
promise.then((res)=>{
  console.log('promise full',res);
})

promise.catch((err)=>{
  console.log('rejected',err);
  
})

/*

function getData(dataId,getNextData){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data : ",dataId);
      resolve('success')
      //reject('error');
      if(getNextData){
        getNextData();
      }
    },8000)
  });
}

*/