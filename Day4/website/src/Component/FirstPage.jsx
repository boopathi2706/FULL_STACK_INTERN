import React from 'react'
import Navbar from './Navbar'
import Form from './Form'

const FirstPage = () => {
  return (
    <div classNameName='firstname'>
        <Navbar />
        <div classNameName="content_firstpage">
              <div classNameName='content_left'>
                   <h1>Build social profiles and gain revenue profits</h1>
                    <div classNameName='lorem'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita fugiat possimus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita fugiat possimus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita fugiat possimus?</p>
                        
                    </div>
              </div>
              <div classNameName="form">
                  <Form />
              </div>
        </div>
    </div>
  )
}

export default FirstPage