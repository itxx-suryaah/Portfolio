import React from "react";
import styles from "../styles/About.module.css";
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div id="about" className={styles.container}>
      <p className={styles.text}>
        Welcome! I'm <span className={styles.highlight}>Surya</span>, a front-end developer specializing in{" "}
        <span className={styles.highlight}>React JS</span>. With expertise in modern web technologies, I focus on building user-centric interfaces that combine clean code with exceptional user experience. Currently working on projects that optimize{" "}
        <span className={styles.highlight}>Core Web Vitals</span> and implement seamless <span className={styles.highlight}>API integrations</span>. I'm always excited to tackle new challenges in web development.
      </p>

      <div className={styles.stats}>
        <div>
          <p className={styles.statvalue}>2+</p>
          <p className={styles.statlabel}>Projects done</p>
        </div>
        <div>
          <p className={styles.statvalue}>0+</p>
          <p className={styles.statlabel}>Years of experience</p>
        </div>
      </div>
      <div>
         <Image 
           src="/logoo.png"  
           className={styles.img} 
           width={90} 
           height={100} 
           alt="Profile Image"
           style={{ maxWidth: "100%", height: "auto" }} // Ensure responsiveness
         />
      </div>
    </div>
  );
}
