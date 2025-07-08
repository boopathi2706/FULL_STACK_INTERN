import React from 'react'

const Button = ({classNames,func,text}) => {
  return (
    <button classNameName={classNames} onClick={func}>{text}</button>
  )
}

export default Button