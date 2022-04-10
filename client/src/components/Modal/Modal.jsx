import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import styles from './modal.module.css';

import { motion } from 'framer-motion';

const Modal = ({ children, closeModalHandler }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={styles.modal__background}
        onClick={closeModalHandler}></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={styles.modal__container}>
        <FontAwesomeIcon
          className={styles.modal__close__btn}
          icon={faClose}
          onClick={closeModalHandler}
        />
        <div className={styles.modal__content}>{children}</div>
      </motion.div>
    </>
  );
};

export default Modal;
