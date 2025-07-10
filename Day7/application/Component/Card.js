import React from 'react'
import Image from 'next/image'

const Card = ({actor_name,actor_img,actor_age,router}) => {
  return (
    <div className='card'>
            <Image className='actor_img' src={actor_img} alt="vijay" onClick={()=>{router.push(`/blog/${actor_name}`)}} />
            <div className="names">
                <h1>{actor_name}</h1>
                <h2>{actor_age}</h2>
            </div>
    </div>
  )
}

export default Card