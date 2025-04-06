import React from "react";
import styles from "../styles/Mypro.module.css";
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const CardContainer = () => {
  const cards = [
    { id: 1, image: "/Screenshot_27-3-2025_19103_localhost.jpeg", title: "SLX | Bike  sales", tags: ["NEXT JS", "mui", "react boostarp", "GPT-3"], link: "#" },
    { id: 2, image: "/udhayal.png", title: "Udayal Padai cheritable truest | Rework", tags: ["HTML 5", "CSS", "Grid create.ui", "GPT-3"], link: "#" },
    
  ];

  return (
    <div id="mypro" className={styles.container}> {/* Add id attribute */}
      <h2 className={styles.heading}>My Portfolio Highlights</h2>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <Image src={card.image} alt={card.title} width={300} height={200} className={styles.image} />
            <h3 className={styles.title}>{card.title}</h3>
            <div className={styles.tagsContainer}>
              <div className={styles.tags}>
                {card.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href={card.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                <ArrowOutwardIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
