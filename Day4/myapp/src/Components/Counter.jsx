import React from 'react'
import ButtonCount from './ButtonCount'

const Counter = ({count,incre,reset,decre}) => {
  return (
    <div className="counter_box">
          <h3>Counter Application</h3>
          <h1 className="count_value" >{count}</h1>
         {/* <div className="buttons">
               <button className='count_btn inc' onClick={incre}>ADD</button>
               <button className='count_btn res' onClick={reset}>RESET</button>
               <button className='count_btn dec' onClick={decre}>SUB</button>
               
         </div> */}
         <ButtonCount incre={incre} reset={reset} decre={decre} />
    </div>
  )
}

export default Counter