console.log(a);// undefined

var a=15;
console.log("a = ",a);
let b=30;
// 1.named function
function app(){
    let b=10;
    console.log("b = ",b);
    console.log("a = ",a);
}
console.log("b = ",b) // ReferenceError no access inside variable
const c=10;
console.log("c = ",c)
// c=30; // type error

// let a=30; //syntax error
app();



// function exoression

var ab= function(){
    console.log("good expression");
}
    ab();


// arrow function
let s =()=>{
    console.log("arrfun");
}
s();


//imediately ivoked function expression

(()=>{
    console.log("invoke function");
})();