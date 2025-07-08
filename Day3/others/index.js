// closure function:
// a function writter or call inside another function

// function add(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// let ad = add(5);
// console.log(ad(4));
// console.log(ad(45));



// timeout


// let b = "result is ready";
// console.log(b);
// setTimeout(() => {
//   console.log("after get the result ");
// }, 2000);

// let a = 10;
// console.log(a);

// call back hell
  //Callback Hell is a term used in JavaScript to describe a situation where multiple nested callback functions make code difficult to read, debug, and maintain


// setTimeout(() => {
//   console.log("1st");
//   setTimeout(() => {
//     console.log("2nd");
//     setTimeout(() => {
//       console.log("3rd");
//       setTimeout(() => {
//         console.log("4th");
//         setTimeout(() => {
//           console.log("5th");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);



// Promise
// A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// let myPromise=new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("i have to give treat");
//     }
//     else{
//         reject("treat cancel");
//     }
// })

// myPromise.then((q)=>console.log(q)).catch((w)=>console.log("pormise : ",w));



// async and await

// const handlePromise=async()=>{
//     try {
//         let a= await myPromise;
//         console.log(a);
//     } catch (error) {
        
//         console.log("error from async : ",error);
//     }
//     finally{
//         console.log("the className run both correct and incorrect")
//     }
// }
// handlePromise();


// fetch the data

// const fetchData=async () => {
//      try {
//         const data=await fetch('https://dummyjson.com/test');
//          console.log(data);
//      if(data.ok){
//         const res=await data.json();
//         console.log(res);
//         console.log("suceess");
//      }   
//      } catch (error) {
//         console.log(error);
//      }
// }

// fetchData();



//interview question
// []+[]=string
// []+{}=array of object
//{}+{}=arrayss of objects
// {}+[]=zero
//npm vs npx

//What is the difference between NPX and NPM medium? NPM is a package management that is used to install, uninstall, and update Javascript packages on your workstation, whereas NPX is a package executer that is used to directly execute Javascript packages without installing them.

console.log([])