import React from 'react'

const Common = ({title,para,btn_name}) => {
  return (
    <div  className='common'>
         <h1 style={{color:'white'}}>{title}</h1>
         <p>{para}</p>
         <button>{btn_name}</button>
    </div>
  )
}

export default Common