"use client"

import React from 'react'
import Card from './Card'
import vijay from "@/public/vijay.jpeg"
import surya from "@/Component/surya.jpg"
import sk from "@/Component/sk.jpg"
import dhanu from "@/Component/dhanush.jpg"
import naya from "@/Component/nayanthara.jpeg"
import thiru from "@/Component/thirusha.jpeg"
import sai from "@/Component/sai.jpeg"
import sam from "@/Component/samantha.jpeg"
import rajini from "@/Component/rajini.jpeg"
import karthi from "@/Component/karthi.jpeg"
import ajith from "@/Component/ajith.jpeg"
import kamal from "@/Component/kamal.jpg"
import sethu from "@/Component/sethu.jpeg"
import thamana from "@/Component/thamana.jpeg"
import keerthi from "@/Component/keerthi.jpeg"



import Wallpaper from './Wallpaper'
import { useRouter } from 'next/navigation'


const MyBlog = () => {
    const router=useRouter();
  return (
    <div className="myblog">
         <Wallpaper />
         <div className="cards">
              <Card actor_name="VIJAY" actor_img={vijay} actor_age='50' router={router}/>
               <Card actor_name="SURYA" actor_img={surya} actor_age='44' router={router}/>
                <Card actor_name="SK" actor_img={sk} actor_age='30' router={router}/>
                 <Card actor_name="DHANUSH" actor_img={dhanu} actor_age='41' router={router}/>
                  <Card actor_name="NAYANTHARA" actor_img={naya} actor_age='52' router={router}/>
                   <Card actor_name="TRISHA" actor_img={thiru} actor_age='40' router={router}/>

                   <Card actor_name="AK" actor_img={ajith} actor_age='52' router={router}/>
               <Card actor_name="RAJINI" actor_img={rajini} actor_age='70' router={router}/>
                <Card actor_name="KARTHI" actor_img={karthi} actor_age='40' router={router}/>
                 <Card actor_name="SAMANTHA" actor_img={sam} actor_age='35' router={router}/>
                  <Card actor_name="SAI PALLAVI" actor_img={sai} actor_age='30' router={router}/>

                   <Card actor_name="SEDHUPATHI" actor_img={sethu} actor_age='50' router={router}/>
                   <Card actor_name="KAMAL" actor_img={kamal} actor_age='68' router={router}/>
                  <Card actor_name="THAMANA" actor_img={thamana} actor_age='40' router={router}/>
                   <Card actor_name="KEERTHI" actor_img={keerthi} actor_age='35' router={router}/>
         </div>
         
    </div>
  )
}

export default MyBlog