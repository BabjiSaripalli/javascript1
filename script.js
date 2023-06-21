//let obj={name:"Babji",age:23,gender:"male"}

//let {name,age,gender} = obj;

//let {name,age,gender} = obj;
let obj={_name:"Babji",age:23,gender:"male",address:{
    state:"AP"
}}


let {address:{state:mystate}}=obj;
console.log(mystate);

//let {address:{state}}=obj;
//console.log(mystate);