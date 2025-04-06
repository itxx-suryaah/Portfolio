import react from "react";
import styles from'../styles/Silderfooter.module.css';
import Link from "next/link";
import Image from "next/image"; // Fix import statement for Image
import Startproject from "../Components/Startproject"; // Import the Startproject component

// Smooth scrolling function
const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
  }
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Left Section */}
        <div className={styles.footerLeft}>
          <h2 className={styles.footerTitle}>Let’s work together today!</h2>
          <Link href="#contact" className={styles.footerButton} onClick={smoothScroll}>
        <Startproject/>
          </Link>
        </div>

        {/* Right Section (Sitemap & Socials) */}
        <div className={styles.footerLinks}>

          {/* Sitemap */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Sitemap</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerItem}>
                <a href="/Home.js" className={styles.footerLink} onClick={smoothScroll}>Home</a>
              </li>
              <li className={styles.footerItem}>
                <Link href="#about" className={styles.footerLink} onClick={smoothScroll}>About</Link>
              </li>
              <li className={styles.footerItem}>
                <Link href="#projects" className={styles.footerLink} onClick={smoothScroll}>Projects</Link>
              </li>
              <li className={styles.footerItem}>
                <Link href="#contact" className={styles.footerLink} onClick={smoothScroll}>Contact Me</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Socials</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerItem}>
                <a href="https://github.com/itxx-suryaah" target="_blank" className={styles.footerLink}>GitHub</a>
              </li>
              <li className={styles.footerItem}>
                <a href="https://www.linkedin.com/in/surya-b-com-ca-6b73b1292" target="_blank" className={styles.footerLink}>LinkedIn</a>
              </li>
              <li className={styles.footerItem}>
                <a href="https://x.com/itxx_Suryaah" target="_blank" className={styles.footerLink}>Twitter X</a>
              </li>
              <li className={styles.footerItem}>
                <a href="https://www.instagram.com/itxx_suryaah" target="_blank" className={styles.footerLink}>Instagram</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#leetcode" className={styles.footerLink} onClick={smoothScroll}>Leetcode</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className={styles.footerBottom}>
        <Image src="/logoo.png" alt="logo" width={100} height={100} className={styles.logo} />
        <p className={styles.pa}>© 2025 Surya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
