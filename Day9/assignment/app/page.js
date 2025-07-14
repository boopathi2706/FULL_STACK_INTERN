"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
    <div className={styles.page}>
        <Link href={"/home"}>Home</Link>
          <p className={styles.p} onClick={()=>{router.push("/image")}}>image</p>
        <Link href={"/card"}>Crat</Link>
        <p className={styles.p} onClick={()=>{router.push("/")}}>Return</p>
     
    </div>
  );
}
