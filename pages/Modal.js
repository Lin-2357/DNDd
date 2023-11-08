// Modal.js
import React from 'react';
import styles from './Modal.module.css'; // Create your own Modal.module.css to style the modal

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;