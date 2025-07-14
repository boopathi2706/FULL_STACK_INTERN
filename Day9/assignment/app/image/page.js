import Image from 'next/image'
import React from 'react'
import ime from '@/public/file.svg';

const ImagePage = () => {
  return (
    <div>
        <img src={ime.src} alt="natural" width={"100px" } height={"100px"}></img>
        <Image s={ime}  width={"100px"} height={"100px"} alt='not loading'></Image>
    </div>
  )
}

export default ImagePage