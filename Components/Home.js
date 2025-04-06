import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import Star from "../Components/Star";
import Resume from "../Components/Resume";
import Scrolldown from "../Components/Scrolldown";
import { useRouter } from 'next/router';
import Mainimg from "../Components/Mainimg";

export const scrollToSection = (sectionId) => {
  if (typeof window !== "undefined") {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 10;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};

const downloadResume = () => {
  const resumeUrl = "/SURYA_T_CV.docx";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.click();
};

const Hero = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHomePage(router.pathname === '/');
  }, [router.pathname]);

  return (
    <>
      {isHomePage && <Star />}
      <section id="home" className={styles.hero}>
        <div className={styles.leftContent}>
          {/* Profile Image & Availability */}
          <div className={styles.profile}>
            <Image
              alt="Surya"
              src="/logoo.png"
              width={100}
              height={100}
              className={styles.avatar}
            />
            <span className={styles.status}>
              <span className={`${styles.greenDot} ${styles.booming}`}></span> Available for work
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className={styles.title}>
            Building Scalable <br />
            Modern Websites <br />
            for the Future
          </h1>

          {/* Buttons */}
          <div className={styles.buttons}>
            <div onClick={downloadResume}>
          <Resume/>
            </div>
            <div
              style={{
                display: 'inline-block',
                cursor: 'pointer',
                padding: '10px 20px',
                color: 'white',
                borderRadius: '5px',
                textAlign: 'center',
              }}
              onClick={() => scrollToSection('about')}
            >
              <Scrolldown />
              <Mainimg/>
            </div>
          </div>
        </div>
     </section>
    </>
  );
};

export default Hero;
