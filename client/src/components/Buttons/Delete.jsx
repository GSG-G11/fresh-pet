import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
const deleteRequest = (id) => {
  Axios.delete(`/api/v1/products/product/${id}`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const Delete = (props) => {
  const { product } = props;
  return (
    // <button
    //   className='delete-btn'
    //   onClick={() => {
    //     deleteRequest(product.id);
    //     props.deleteHandler(product.id);
    //   }}>
    //   <FontAwesomeIcon icon={faClose} />
    // </button>
    <button
      className='delete-btn'
      onClick={() => {
        deleteRequest(product.id);
        props.deleteHandler(product.id);
      }}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default Delete;
