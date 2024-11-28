import React from 'react';
import styles from './Skills.module.css'; 

const Skills: React.FC = () => {
  return (
    <div id="skills" className={styles.container}>
      <div className={styles.gridContainer}>
        <div>
          <h2 className={styles.heading}>Technologies I work with</h2>
          <p className={styles.description}>
            I have a solid foundation in frontend web development. I work on HTML, CSS, TypeScript, React, and Next.js. 
            I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className={styles.skillsGrid}>
            <div className={styles.column}>
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>TypeScript</h2>
              <h2>JavaScript</h2>
              <h2>Python</h2>
            </div>
            <div className={styles.column}>
              <h2>React</h2>
              <h2>Next.js</h2>
              <h2>Tailwind CSS</h2>
              <h2>Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

