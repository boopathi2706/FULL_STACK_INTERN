import React from 'react'

const Form = ({check}) => {
    
  return (
    <div className='form'>
        
        <form   action="">
            <h3>Sign Up Page</h3>
            <input type="text"  placeholder='Username' required/>
            <input type="email"  placeholder='Email' required/>
            <input type="password"  placeholder='Password' required/>
            <input type="password"  placeholder='Confirm Password' required/>
            <button onClick={check} >Sign Up</button>
        </form>
    </div>
  )
}

export default Form