import React from 'react';
import styles from './form.module.css';
const UpdateProduct = ({
  handleChange,
  handleUpdateProduct,
  formInput: { name, description, petCategory, subCategory, price, image },
  hasErrorValidation,
}) => {
  const categories = ['Food', 'Accessories', 'Toy'];
  const petCategories = ['cat', 'dog', 'horse', 'bird', 'fish'];
  return (
    <div className={styles.container__modal__product}>
      <h1 className={styles.title__modal__product}> Update Product </h1>
      <form className={styles.form__group__product}>
        <div className={styles.form__input__product}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter Your Name of product..."
          />
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="petCategory">Pet Category</label>

          <select
            id="petCategory"
            value={petCategory}
            name="petCategory"
            onChange={handleChange}
          >
            {petCategories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="subCategory">Sub Category</label>

          <select
            name="subCategory"
            value={subCategory}
            onChange={handleChange}
          >
            {categories.map((category) => {
              return (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={handleChange}
            placeholder="Enter Your price of product..."
          />
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            id="image"
            value={image}
            onChange={handleChange}
            placeholder="Enter Your image of product..."
          />
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Enter Your description..."
          >
            {description}
          </textarea>
        </div>
        {hasErrorValidation && (
          <div className={styles.form__input__product}>
            <p className="error">Inputs Should not be empty!</p>
          </div>
        )}
        <div className={styles.form__input__product}>
          <button
            className={styles.btn__create__product}
            type="button"
            onClick={handleUpdateProduct}
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
