import React from 'react'
import skills from "../../utils/skills.json";
import { getImageUrl } from "../../utils/utils";
import styles from "./Skills.module.css";
import{SkillCard} from "./SkillCard";
export const Skills = () => {
  return(
  <section className={styles.container} id="skills">
    <div className={styles.centerdiv}>
    <h2 className={styles.title}>My Skills</h2>
    </div>
    <div className={styles.content}>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <SkillCard key={id}
            logo = {getImageUrl(skill.imageSrc)}
            skillName = {skill.title}
            logoName = {skill.logoName}
            logoLink = {skill.link}
            />
          );
        })}
      </div>
      </div>
      </section>
  );
}
