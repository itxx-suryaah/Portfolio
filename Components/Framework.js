import React from "react";
import styles from'../styles/Framework.module.css';

export default function ToolsSection() {
  const tools = [
    { name: "Figma", category: "Design tool", icon: "/figma.svg" },
    { name: "HTML", category: "User Interface", icon: "/icons8-html-5-48.png" },
    { name: "CSS", category: "User Interface", icon: "/css3.svg" },
    { name: "JavaScript", category: "Interaction", icon: "/javascript.svg" },
    { name: "NodeJS", category: "Web Server", icon: "/nodejs.SVG" },
    { name: "ExpressJS", category: "Node Framework", icon: "/expressjs.svg" },
    { name: "MongoDB", category: "Database", icon: "/mongodb.svg" },
    { name: "MySQL", category: "Database", icon: "/icons8-mysql-logo-96.png" },
    { name: "React", category: "Framework", icon: "/react.svg" },
    { name: "TailwindCSS", category: "User Interface", icon: "/tailwindcss.svg" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.top}>Essential Tools I use</h2>
      <p className={styles.sub}>Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
      <div className={styles.grid}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.card}>
            <img src={tool.icon} alt={tool.name} />
            <div className={styles.cardcontent}>
              <h3>{tool.name}</h3>
              <p>{tool.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
