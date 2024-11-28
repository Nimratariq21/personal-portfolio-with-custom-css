import Link from "next/link";
import styles from './Navbar.module.css'; 

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>
      <h1>Portfolio</h1>
      </div>
      <ul className={styles.navLinks}>
          <li className='menuLink'><a href='#hero'>Home</a></li>
          <li className='menuLink'><a href='#about'>About</a></li>
          <li className='menuLink'><a href='#skills'>Skills</a></li>
          <li className='menuLink'><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
