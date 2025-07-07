import React from 'react';
import { useState,useEffect,useRef } from 'react';
import './App.css'
import Child1 from './Components/Comp1'
import logo from "./assets/react.svg";
import Grandfather from './Components/Grandfather';
import Counter from './Components/Counter';

function App() {
  const [count,setCount]=useState(0);
  var counterRef=useRef()
  
 const a=React.createElement("div",null,[
 
  React.createElement("img",{src:logo,height:"100px"}),
   React.createElement("h1",null,"Hello"),
   React.createElement("div",null,[
     React.createElement("p",null,"p tag"),
      React.createElement("button",null,"click me"),
      React.createElement("div",null,[
        React.createElement("p",null,"inside p tag")
      ])
   ])
 ]);

 const incre=()=>{
     setCount(count+1);
 }
 const decre=()=>{
  // usestate
    //  if(count==0){
    //   setCount(0);
    //  }
    //  else{
    //   setCount(count-1);
    //  }


     //useeffect

     setCount(count-1);
 }
 const reset=()=>{
     setCount(0);
    console.log('hello');
 }
 useEffect(()=>{
  if(count<0){
    counterRef.current.style.color='red';
    let time=setTimeout(()=>{
      setCount(0);
    },2000)
  
  return ()=>{
    counterRef.current.style.color='black';
    clearTimeout(time);
  }
}
 },[count])
  return (
    <>
    {/* //create the element using js below the function */}
    {/* {a}  
      <Child1 aa="input from parent" bb={100} /> */}
    {/* // props */}
    {/* <Grandfather property="sumbit my property my child" /> */}



    {/* // counter application */}
    {/* without props */}
    {/* <div className="counter_box">
          <h3>Counter Application</h3>
          <h1 className="count_value" >{count}</h1>
         <div className="buttons">
               <button className='count_btn inc' onClick={incre}>ADD</button>
               <button className='count_btn res' onClick={reset}>RESET</button>
               <button className='count_btn dec' onClick={decre}>SUB</button>
               
         </div>
         
    </div> */}



{/* counter application with props */}
    {/* <Counter count={count} incre={incre} reset={reset} decre={decre} /> */}


{/* use Ref example */} 
{/* <center>
     <h1 ref={counterRef}>Limit cross</h1>
</center> */}






    </>
  )
}

export default App
