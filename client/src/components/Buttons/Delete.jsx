import React from 'react';

const deleteRequest = (id) => {
  /// check it, it has error in console log
  fetch(`/api/v1/products/product/${id}`, { method: 'DELETE' })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const Delete = (props) => {
  const {product} = props;
  return(
    <button
    className='delete-btn'
       onClick={() => {
       deleteRequest(product.id);
      props.deleteHandler(product.id);
    }}
    >
    x
  </button>
  )
}

export default Delete;