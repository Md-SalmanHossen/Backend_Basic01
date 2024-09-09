
//async function always return a promise.
// await pauses the execution of its surrounding async function until the promise is settled.
//await must use in async function.


function getData(dataId){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          console.log('data ',dataId);
          resolve('success');
      },2000); 
  })
}

async function getAllData(){
  console.log('getting data1....');
  await getData(1);
  console.log('getting data2....');
  await getData(2);
  console.log('getting data3....');
  await getData(3);
}
  
  
  