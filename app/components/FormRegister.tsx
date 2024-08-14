import React from "react";
import styles from "./FormRegister.module.css";

const FormRegister: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Form Sign up</h1>
      <form className={styles.form}>
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
              <option value="us">US</option>
              <option value="vn">VN</option>
            </select>
            <input type="tel" id="phone" placeholder="+84 (123) 456-789" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea id="address" placeholder="Your address" />
        </div>

        <div className={styles.formGroup}>
          <label>Skills</label>
          <div className={styles.checkboxGroup}>
            <label>
              <input type="checkbox" value="html" /> HTML
            </label>
            <label>
              <input type="checkbox" value="javascript" /> JavaScript
            </label>
            <label>
              <input type="checkbox" value="uxdesign" /> UX design
            </label>
            <label>
              <input type="checkbox" value="reactjs" /> ReactJS
            </label>
            <label>
              <input type="checkbox" value="css" /> CSS
            </label>
            <label>
              <input type="checkbox" value="java" /> Java
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
