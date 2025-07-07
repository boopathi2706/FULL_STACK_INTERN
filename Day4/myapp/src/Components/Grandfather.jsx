import React from 'react'
import Parent from './Parent'

const Grandfather = (props) => {
  return (
    <div><h1>Grandfather</h1>
        <h2>{props.property}</h2>
         <Parent property={props.property} />
    </div>
    
  )
}

export default Grandfather