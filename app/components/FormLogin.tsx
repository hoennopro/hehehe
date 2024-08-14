import React from "react";
import styles from "./FormLogin.module.css";

const FormLogin: React.FC = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Form Sign up</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@company.com" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone number</label>
          <div className={styles.phoneInput}>
            <select id="countryCode">
              <option value="US">US</option>
              <option value="VN">VN</option>
              <option value="JP">JP</option>
              {/* Add more country options as needed */}
            </select>
            <input type="tel" id="phone" placeholder="+84 (123) 456-789" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            placeholder="Tell us a little about the project..."
          />
        </div>

        <div className={styles.formGroup}>
          <label>Skills</label>
          <div className={styles.skillsGrid}>
            <div>
              <input type="checkbox" id="html" />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input type="checkbox" id="javascript" />
              <label htmlFor="javascript">JavaScript</label>
            </div>
            <div>
              <input type="checkbox" id="ux-design" />
              <label htmlFor="ux-design">UX design</label>
            </div>
            <div>
              <input type="checkbox" id="reactjs" />
              <label htmlFor="reactjs">ReactJS</label>
            </div>
            <div>
              <input type="checkbox" id="css" />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input type="checkbox" id="java" />
              <label htmlFor="java">Java</label>
            </div>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
