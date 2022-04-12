import React from 'react';
import styles from './form.module.css';
const LoginForm = ({ handleLoginIn, handleChangeUserName, username }) => {
  return (
    <div className={styles.container__modal__product}>
      <h1 className={styles.title__modal__product}> Join Now </h1>
      <form className={styles.form__group__product}>
        <div className={styles.form__input__product}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            value={username}
            onChange={handleChangeUserName}
            placeholder='Enter Your Name of UserName...'
          />
        </div>

        <div className={styles.form__input__product}>
          <button
            className={styles.btn__create__product}
            type='button'
            onClick={() => handleLoginIn(username)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
