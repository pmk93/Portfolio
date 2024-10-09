import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import { getImageUrl } from "../../utils/utils";
import styles from "./Experience.module.css";
import experience from "../../utils/experience.json";

export const Experience = () => {
    return(
    <section className={styles.container} id="experience">
    <div className={styles.centerdiv}>
    <h2 className={styles.header}>My Experience</h2>
    </div>
    <div className={styles.content}>
      <div className={styles.experience}>
        {experience.map((exp, id) => {
          return (
            <ExperienceCard key={id}
            logo = {getImageUrl(exp.imageSrc)}
            title = {exp.title}
            startDate = {exp.startDate}
            endDate = {exp.endDate}
            description = {exp.description}
            organisation={exp.organisation}
            />
          );
        })}
      </div>
      </div>
      </section>
  )}
