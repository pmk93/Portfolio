import React from 'react';
import styles from "./Experience.module.css";

export const ExperienceCard = ({ logo, title, organisation, startDate, endDate, description }) => {
  return (
    <div className={styles.experienceCardContainer}>
      <div className={styles.logoAndTitle}>
        <img src={logo} alt={`${organisation} logo`} className={styles.logo}/>
        <h3 className={styles.title}>{title} at {organisation}</h3>
      </div>
      <span className={styles.dates}>{startDate} - {endDate}</span>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
