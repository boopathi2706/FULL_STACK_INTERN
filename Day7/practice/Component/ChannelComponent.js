"use client"
import { useRouter,useParams, usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

const ChannelComponent = () => {
    const router=useRouter();
    const param=useParams();
    const path=usePathname();
    const searchparams=useSearchParams("/channel?city='india'");
    const city=searchparams.get('city')

  return (
    <div>
        <h1>Channel Name is : {param.channel}</h1>
        <button onClick={()=>{
            router.push("/youtube")
        }}>Click me</button>
        <h1>Path Is : {path}</h1>
        <h1>City Name is : {city}</h1>
    </div>
  )
}

export default ChannelComponent