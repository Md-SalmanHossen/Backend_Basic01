
let obj={
  name:"salman",
  age:24,
  what:'what is this ?'
}
obj.name="Salman Hossen";
Object.freeze(obj);
obj.name="Muhammad";

//this is way to access object
console.log(obj.what);
console.log(obj['name']);
