import React from 'react'
import Image from 'next/image'
import styles from "../styles/Mainimg.module.css";

const Mainimg = () => {
  return (
    <div className={`${styles.imageWrapper} ${styles.mobileHidden}`}>
    <Image
      src="/WhatsApp Image 2025-03-26 at 17.02.03_ada7ca97.jpg"
      alt="Surya"
      width={300}
      height={300}
      className={styles.heroImage}
    />
  </div>
  )
}

export default Mainimg