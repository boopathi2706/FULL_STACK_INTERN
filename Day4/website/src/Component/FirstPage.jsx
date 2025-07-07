import React from 'react'
import Navbar from './Navbar'
import Form from './Form'

const FirstPage = () => {
  return (
    <div className='firstname'>
        <Navbar />
        <div className="content_firstpage">
              <div className='content_left'>
                   <h1>Build social profiles and gain revenue profits</h1>
                    <div className='lorem'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita fugiat possimus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita fugiat possimus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita fugiat possimus?</p>
                        
                    </div>
              </div>
              <div className="form">
                  <Form />
              </div>
        </div>
    </div>
  )
}

export default FirstPage