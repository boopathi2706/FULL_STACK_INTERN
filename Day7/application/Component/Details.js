"use client";

import { useParams } from "next/navigation";
import React from "react";
import vijayImg from "@/public/vijay.jpeg";
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


const Details = () => {
  const param = useParams();
  const actor_name = param.id;


  const data = [
    {
      name: "VIJAY",
      age: 50,
      img: vijayImg,
    },
    {
      name: "SURYA",
      age: 43,
      img: surya,
    },
    {
      name: "SK",
      age: 33,
      img:sk,
    },
    {
      name: "DHANUSH",
      age: 41,
      img: dhanu,
    },
    {
      name: "NAYANTHARA",
      age: 48,
      img: naya,
    },
    {
      name: "TRISHA",
      age: 45,
      img: thiru,
    },
    {
      name: "SAI_PALLAVI",
      age: 30,
      img: sai,
    },
     {
      name: "SAMANTHA",
      age: 43,
      img: sam,
    },
    {
      name: "RAJINI",
      age: 73,
      img: rajini,
    },
    {
      name: "KAMAL",
      age: 71,
      img: kamal,
    },
    {
      name: "SEDHUPATHI",
      age: 51,
      img: sethu,
    },
    {
      name: "THAMANA",
      age: 42,
      img: thamana,
    },
    {
      name: "KARTHI",
      age: 37,
      img: karthi,
    },
    {
      name: "AJITH",
      age:53,
      img: ajith,
    },
    {
      name: "KEERTHI",
      age: 33,
      img: keerthi,
    },
  ];

  
  const actor = data.find(
    (item) => item.name.toLowerCase() === actor_name.toLowerCase()
  );

  if (!actor) {
    return <div><h2>Actor not found</h2></div>;
  }

  return (
    <div className="details">
        <div className="detail">
              <img src={actor.img.src} alt={actor.name}  />
              <h1>{actor.name}</h1>
              <p>Age: {actor.age}</p>
             
        </div>
     
    </div>
  );
};

export default Details;