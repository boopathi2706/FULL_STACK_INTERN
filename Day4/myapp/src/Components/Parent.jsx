import React from 'react'
import Grandchild from './Grandchild'

const Parent = (props) => {
  return (
    <div><h1>Parent</h1>
        <h2>{props.property}</h2>
        <Grandchild property={props.property} />
    </div>
  )
}

export default Parent