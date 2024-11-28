// components/Contact.tsx
import React from 'react';
import styles from './Contact.module.css'; // Import CSS module

const Contact: React.FC = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.grid}>
        <div className={styles.info}>
          <h2 className={styles.heading}>
            You can reach us
            <br />
            via email or phone.
          </h2>
          <p className={styles.text}>
            Drop me a line, give me a call and send me a message
            <br />
            by submitting the form.
          </p>
          <div className={styles.contactItem}>
             nimratariq2106@gmail.com
          </div>
          <div className={styles.contactItem}>
             0370 3144900
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={8} className={styles.textarea}></textarea>
          </div>
          <button className={styles.button}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

