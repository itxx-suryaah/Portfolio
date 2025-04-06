"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/Contact.module.css"; // Import the CSS file
import InstagramIcon from '@mui/icons-material/Instagram';
import Socialmedia from '../Components/Socialmedia';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactwrapper}>
      <h2>
        Contact me for <span>collaboration</span>
      </h2>
      <p>
        Reach out today to discuss your project needs and start collaborating on something amazing!
      </p>
<Socialmedia/>
    </section>
  );
};

export default ContactSection;
