import React from "react";
import { getImageUrl } from "../../utils/utils";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Pranav</h1>
        <p className={styles.description}>
          A Full stack software engineer.
        </p>
        
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
    </section>
  );
};

export default Hero;