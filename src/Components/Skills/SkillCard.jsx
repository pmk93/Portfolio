import React from 'react';
import styles from "./Skills.module.css";

export const SkillCard = ({ logo, skillName, yearsOfExperience, logoName }) => {
  return (
    <div className={styles.card}>
      <img src={logo} alt={logoName} className={styles.imgclass}/>
      <p>{skillName}</p>
      <p>{yearsOfExperience}</p>
    </div>
  );
};
