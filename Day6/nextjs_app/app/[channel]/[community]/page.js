import React from 'react'

const Mycommunity = ({params}) => {
  return (
     <div className='youtube_area'>
        <div className="channel_area">
          <div className='channel_i'></div>
          <div className='channel_n'>
            <h1>{params.channel}</h1>
            <p>Community : {params.community}</p>
            <button>Subscribe</button>
          </div>
          <div className="logo"></div>
        </div>
    </div>
  )
}

export default Mycommunity