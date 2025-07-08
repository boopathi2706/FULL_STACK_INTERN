import React from 'react'
import { useOutletContext,useParams } from 'react-router-dom'


const Task = () => {
    const {topicname}=useParams();
    let {val,setVal}=useOutletContext();
    console.log(topicname)
    console.log(val);

  return (
    <div>
        <center>
                <h1>Task</h1>
                <h3>{topicname}</h3>
                <p>{val}</p>
                <button onClick={()=>{
                  setVal(val+1);
                }}>

                </button>
        </center>
       
    </div>
  )
}

export default Task