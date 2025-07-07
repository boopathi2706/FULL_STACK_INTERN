import React from 'react'

const Grandchild = (props) => {
  return (
    <div>
        <h1>Grandchild</h1>
       <h2>{props.property}</h2>
        </div>
  )
}

export default Grandchild