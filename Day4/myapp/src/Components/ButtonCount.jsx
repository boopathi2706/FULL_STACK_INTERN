import React from 'react'
import Button from './Button'

const ButtonCount = ({incre,reset,decre}) => {
  return (
    <div className="buttons">
               {/* <button className='count_btn inc' onClick={incre}>ADD</button>
               <button className='count_btn res' onClick={reset}>RESET</button>
               <button className='count_btn dec' onClick={decre}>SUB</button> */}

               <Button classs="count_btn inc" func={incre} text="ADD" />
               <Button classs="count_btn res" func={reset} text="RESET" />
               <Button classs="count_btn dec" func={decre} text="SUB" />

               
    </div>
  )
}

export default ButtonCount