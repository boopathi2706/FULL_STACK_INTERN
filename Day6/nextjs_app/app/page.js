import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/Component/Card";

export default function Home() {
  return (
    <div className={styles.page}>
     <Card />
    </div>
  );
}
