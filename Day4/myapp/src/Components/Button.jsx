import React from 'react'

const Button = ({classs,func,text}) => {
  return (
    <button className={classs} onClick={func}>{text}</button>
  )
}

export default Button