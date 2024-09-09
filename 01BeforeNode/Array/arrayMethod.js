
//foreach,map,filter,find,indexof

var arr = [1,2,3,4,6];
arr.forEach(function(val) {
  console.log(val+" hello");
});

var arrayMap=[1,2,3,4];
arrayMap.map(function(val){
  console.log(val+12);
});

var myMap=[1,2,3,4];
let newMap=myMap.map((value)=>{
  return value+10;
});
console.log(newMap);

var arr=[1,2,3,4];
let myArr=arr.filter((value)=>{
  if(value>3){
    return true;
  }else return false;
});
console.log(myArr);

var myFind=[1,2,3,4];
let newFind=myFind.find((value)=>{
  if(value==2) return value;
})
console.log(newFind);//if double value same then it returns first value


var array=[1,2,3,4];
console.log(array.indexOf(1));





