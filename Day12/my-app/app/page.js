"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {signIn,signOut,useSession} from "next-auth/react"

export default function Home() {
  const {data:session}=useSession();
  if(session){
    return(
      <div className={styles.page}>
      <p className="p">your are login in <span>{session.user.email}</span> </p>
      <button onClick={()=>signOut()}>log out</button>
      </div>
    )
  }
  return (
    <div className={styles.page}>
      <p className="p1">please login in</p>
      <button onClick={()=>signIn()}>Login</button>
    </div>
  );
}
