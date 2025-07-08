import React from 'react'
import "./style.css"
import img1 from "./one.jpg"
import img2 from "./two.webp"
import img3 from "./third.jpeg"

import FirstPage from './FirstPage'
import Secondpage from "./Secondpage"
import Common from './Common'
import Footer from './Footer'
const Homepage = () => {
  return (
    <div classNameName='homepage'>
        <FirstPage />
        <Common title="Explore" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" btn_name="findout" />
        <Secondpage classNames_name="second second_one" img={img1} second_topic="Explore & Connect" sub_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
        <Common  title="Create" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"  btn_name="findout"/>
        <Secondpage classNames_name="second second_two" img={img2} second_topic="Create Your Passion" sub_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
        <Common title="Share"  para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took" btn_name="findout"/>
        <Secondpage classNames_name="second second_one" img={img3} second_topic="Share What Yoou Reatee" sub_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
        <Footer />
    </div>
  )
}

export default Homepage