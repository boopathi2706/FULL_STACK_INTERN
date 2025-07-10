"use client"
import { useRouter,useParams, usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

const CommunityComponent = () => {
    const router = useRouter();
    const param=useParams();
    const path=usePathname();
    const search=useSearchParams("/channel/community?followers=234");
    const follow=search.get("followers")
  return (
    <div>
        <h1>CommunityComponent</h1>
        <h3>community name : {param.community}</h3>
        <h4>channel name : {param.channel}</h4>
        <button onClick={()=>{
            router.push("/BOOPATHI/MAX_COMMUNITY");
        }}>Click Me</button>
        <h1>path name is : {path}</h1>
        <h1>followers : {follow}</h1>
    </div>
  )
}

export default CommunityComponent