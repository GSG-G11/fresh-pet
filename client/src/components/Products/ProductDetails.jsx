import React, {Component} from "react";

class ProductDetails extends Component{
  state ={
    singleProduct: {}
  }
  componentDidMount(){
    const {id} = this.props.match.params;
      fetch(`/api/v1/products/product/${id}`)
      .then((data) => data.json())
      .then(({data}) => this.setState({singleProduct: data}))
      .catch((err) => console.log(err));
  }
  render(){
    const {name,
            description,
            price,
            pet_category,
            sub_category,
            image} = this.state.singleProduct;
    
    return(
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <p>{pet_category}</p>
        <p>{sub_category}</p>
        <img src={image} alt='product'/>
      </div>
    )
  }
}
export default ProductDetails;
