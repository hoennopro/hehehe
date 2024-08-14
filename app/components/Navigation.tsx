import React from "react";
import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logoipsum.png" alt="Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Updates</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>
      <div className={styles.profileIcon}>
        <img src="/profile-icon.png" alt="Profile Icon" />
      </div>
    </nav>
  );
};

export default Navigation;
