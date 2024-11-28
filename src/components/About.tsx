import React from 'react';
import styles from './About.module.css'; 

const About: React.FC = () => {
  return (
    <div id="about" className={styles.container}>
      <h2 className={styles.heading}>About me</h2>
      <p className={styles.text}>
        I&apos;m a student of GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and Metaverse. 
        I am passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
    </div>
  );
};

export default About;

