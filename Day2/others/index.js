//tag selector


const h1=document.getElementsByTagName('h1');
console.log(h1[0]);

//Id selector

const id=document.getElementById('a');
console.log(id);

//className selector

const clas=document.getElementsByclassNameName('b');
console.log(clas)

//query Selector

const d=document.querySelector('#a');
console.log(d);

//query selector all

const e=document.querySelectorAll("h1");
console.log(e)


// read and white

console.log(clas[0].textContent);

id.textContent="dom value change using id";


//styling
id.style.color='red';

id.classNameList.add("hello");
id.classNameList.remove("hello");


// add element

const aa = document.createElement("h2");
aa.textContent="new element create";

document.body.appendChild(aa);