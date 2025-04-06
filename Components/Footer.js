import React from 'react';
import Image from 'next/image';
import styles from'../styles/Footer.module.css';
const Footer = () => {
    return (
        <footer>
            <Image src="/logoo.png" alt="logo" width={100} height={100} className={styles.logo} />
            <p className={styles.p}>© 2023 Surya. All rights reserved.</p>
        </footer>
    );
};

export default Footer;      