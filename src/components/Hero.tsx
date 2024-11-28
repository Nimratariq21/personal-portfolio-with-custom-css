import React from 'react';
import Navbar from './Navbar';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div id="hero" className={styles.hero}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.emptyBlock}></div>
        <div className={styles.textBlock}>
          <div>
            <p>I&apos;m</p>
            <p>Nimra</p>
            <p>Siddique</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

