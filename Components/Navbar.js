import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = ({ scrollToSectionWithOffset }) => {
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/logoo.png" width={70} height={70} alt="Logo" />
      </div>

      {/* Hamburger Menu (Shown on Mobile) */}
      <div
        className={styles.hamburger}
        onClick={toggleMenu}
        style={{ color: 'white', position: 'absolute', right: '35px', backgroundColor: 'none' }}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`} style={{ textAlign: 'center', marginRight: '34%' }}>
        <button
          className={`${styles.tab} ${activeTab === "Home" ? styles.active : ""}`}
          onClick={() => {
            handleTabChange("Home");
            scrollToSectionWithOffset('home'); // Correct section ID
          }}
        >
          Home
        </button>
        <button
          className={`${styles.tab} ${activeTab === "About" ? styles.active : ""}`}
          onClick={() => {
            handleTabChange("About");
            scrollToSectionWithOffset('about');
          }}
        >
          About
        </button>
        <button
          className={`${styles.tab} ${activeTab === "Portfolio" ? styles.active : ""}`}
          onClick={() => {
            handleTabChange("Portfolio");
            scrollToSectionWithOffset('mypro'); // Scroll to Mypro section
          }}
        >
          Portfolio
        </button>
        <button
          className={`${styles.tab} ${activeTab === "Contact Me" ? styles.active : ""}`}
          onClick={() => {
            handleTabChange("Contact Me");
            scrollToSectionWithOffset('contact');
          }}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
