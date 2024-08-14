import React from "react";
import styles from "./Popup.module.scss";

interface PopupProps {
  title: string;
  description: string;
  onCancel: () => void;
  onDelete: () => void;
}

const Popup: React.FC<PopupProps> = ({
  title,
  description,
  onCancel,
  onDelete,
}) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <div className={styles.icon}>
          <span className={styles.warningIcon}>!</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <button onClick={onCancel} className={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={onDelete} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
