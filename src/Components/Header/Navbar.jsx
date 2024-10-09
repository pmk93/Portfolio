import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils/utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const updateImage = () => {
    const width = window.innerWidth;

    if (width < 1050) {
      setImageSrc('nav/download.png');
    } else {
      setImageSrc('nav/Resume.png');
    }
  };

  useEffect(() => {
    updateImage(); // Set the initial image based on screen width
    window.addEventListener('resize', updateImage); // Update image on resize

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);


  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="#">
        Pranav Kale
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            getImageUrl("nav/menuIcon.png")
          }
          alt="Menu Button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li className={styles.menuItem}>
            <a href="#skills">Skills</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#experience">Experience</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#about">About</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#contact">Contact</a>
          </li>
          {imageSrc === 'nav/download.png' && <li>
            <a href="/assets/pranavKaleResume.pdf" download="Pranav_Kale_Resume.pdf">
              <img
                className={styles.resumeBtn}
                src={getImageUrl(imageSrc)}
                alt="Menu Button"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </a>
          </li>}
        </ul>
      </div>
      <a href="/assets/pranavKaleResume.pdf" download="Pranav_Kale_Resume.pdf">
        <img
          className={styles.resumeBtnExt}
          src={getImageUrl(imageSrc)}
          alt="Menu Button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </a>
    </nav>
  );
};