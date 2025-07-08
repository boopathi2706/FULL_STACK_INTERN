import React from 'react'

const Secondpage = ({classNames_name,img,second_topic,sub_content}) => {
  return (
    <div classNameName={classNames_name}>
        <div classNameName="image_area">
          <img src={img} alt="" />
        </div>
        <div classNameName="content_area2">
          <h1 classNameName="heading">{second_topic}</h1>
          <p classNameName='sub_heading'>{sub_content}</p>
          <p classNameName='sub_heading1'>{sub_content}</p>
          <p classNameName='sub_heading1'>{sub_content}</p>
        </div>
    </div>
  )
}

export default Secondpage