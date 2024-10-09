import React from 'react';
import styles from './ContactSection.module.css';

export const ContactSection = () => {
  return (
    <div className={styles.contactSectionContainer}>
      <h2 className={styles.contactTitle} id="contact">Contact Me</h2>
      <div className={styles.contactContent}>
        <form className={styles.contactForm}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.inputField}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.inputField}
            required
          />
          <textarea
            placeholder="Your Message"
            className={styles.textArea}
            rows="5"
            required
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
