import React from 'react';
import { getImageUrl } from "../../utils/utils";
import styles from "./AboutMe.module.css";


export const AboutMe = () => {
  return (
    <section className={styles.container} id="about">
        <img src={getImageUrl("about/aboutme.png")} alt="aboutme" />
        <div className={styles.aboutContainer}>
        <h3 className={styles.title}>About Me </h3>
        <div className={styles.description}>
        I am a Senior Associate – Technology at Synechron, specializing in full-stack development with a focus on both front-end and back-end technologies. I have experience building seamless user experiences using JavaScript frameworks like React.js and Ember.js, alongside backend solutions in Java (Spring Boot). I have a proven track record of designing RESTful APIs, ensuring efficient communication across complex systems, and deploying applications using CI/CD pipelines. I excel at troubleshooting, optimizing application performance, and working on large-scale banking applications with a global user base.
        </div>
        </div>
    </section>
  )
}