import React from 'react'
import Button from './Button'

const ButtonCount = ({incre,reset,decre}) => {
  return (
    <div classNameName="buttons">
               {/* <button classNameName='count_btn inc' onClick={incre}>ADD</button>
               <button classNameName='count_btn res' onClick={reset}>RESET</button>
               <button classNameName='count_btn dec' onClick={decre}>SUB</button> */}

               <Button classNames="count_btn inc" func={incre} text="ADD" />
               <Button classNames="count_btn res" func={reset} text="RESET" />
               <Button classNames="count_btn dec" func={decre} text="SUB" />

               
    </div>
  )
}

export default ButtonCount