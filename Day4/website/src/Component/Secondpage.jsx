import React from 'react'

const Secondpage = ({classs_name,img,second_topic,sub_content}) => {
  return (
    <div className={classs_name}>
        <div className="image_area">
          <img src={img} alt="" />
        </div>
        <div className="content_area2">
          <h1 className="heading">{second_topic}</h1>
          <p className='sub_heading'>{sub_content}</p>
          <p className='sub_heading1'>{sub_content}</p>
          <p className='sub_heading1'>{sub_content}</p>
        </div>
    </div>
  )
}

export default Secondpage