// import React, { Component } from 'react';

// class DeleteProduct extends Component {

//   componentDidMount() {
//     const { id } = this.props.match.params;
//     fetch(`/api/v1/products/product/${id}`, { method: 'DELETE' })
//       .then((data) => data.json())
//         .then(({ data }) => {
//             const filterdData = data.filter((item) => {
//                 return item.id !== id;
//             })
//         })
//       .catch((err) => console.log(err));
//   }
//   render() {
//       return (
//         <div>hello</div>
//     );
//   }
// }
// export default DeleteProduct;
