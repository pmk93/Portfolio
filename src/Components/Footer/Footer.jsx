import React from 'react'
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerContent}>
    {/* <div className={styles.footerLogos}>
        <img src="path-to-your-logo1" alt="Logo 1" class="logo" />
      <img src="path-to-your-logo2" alt="Logo 2" class="logo" />
    </div> */}

    <p className={styles.footerAttribution}>
      All the skill Logos are by <a href="https://icons8.com" target="_blank">icons8.com</a>
    </p>
  </div>
</footer>

  )
}
