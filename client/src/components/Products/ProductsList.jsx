import React, { Component } from 'react';
import Axios from 'axios';
import PriceFilter from './PriceFilter';

import {
  Modal,
  CreateProduct,
  UpdateProduct,
  Product,
  ProductsFilter,
  PetFilter,
} from '..';

import './ProductSection.css';

class ProductsList extends Component {
  state = {
    products: [],
    filteredProducts: [],
    priceRange: [0, 200],
    isOpen: false,
    componentName: '',
    formInput: {
      name: '',
      description: '',
      petCategory: '',
      subCategory: '',
      price: '',
      image: '',
    },
    hasErrorValidation: false,
    productId: '',
  };

  componentDidMount() {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((data) => this.setState({ products: data.products }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products !== this.state.products) {
      this.setState({ filteredProducts: this.state.products });
    }

    if (prevState.filteredProducts !== this.state.filteredProducts) {
      this.setState({ filteredProducts: this.state.filteredProducts });
    }
  }

  handlePriceRange = (min, max) => {
    this.setState({ priceRange: [min, max] });
    const { products } = this.state;
    const filteredProducts = products.filter((product) => {
      return product.price >= min && product.price <= max;
    });
    this.setState({ filteredProducts });
  };

  handlePetSelection = (pet) => {
    if (pet === 'all') {
      this.setState({ filteredProducts: this.state.products });
      return;
    }
    const { products } = this.state;
    const filteredProducts = products.filter((product) => {
      return product.pet_category === pet;
    });
    this.setState({ filteredProducts });
  };

  deleteHandler = (id) => {
    const { products } = this.state;
    const { alertSuccess } = this.props;
    const filteredProducts = products.filter((product) => product.id !== id);
    alertSuccess('Product Deleted Successfully');
    this.setState({ products: filteredProducts });
  };

  handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const { products } = this.state;
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchValue);
    });
    this.setState({ filteredProducts });
  };

  handleSelect = (event) => {
    const selectValue = event.target.value.toLowerCase();
    if (selectValue === 'all') {
      this.setState({ filteredProducts: this.state.products });
      return;
    }
    const { products } = this.state;
    const filteredProducts = products.filter((product) => {
      return product.sub_category === selectValue;
    });
    this.setState({ filteredProducts });
  };

  clearInputs = () => {
    this.setState({
      componentName: '',
      isOpen: false,
      formInput: {
        name: '',
        description: '',
        petCategory: '',
        subCategory: '',
        price: '',
        image: '',
      },
      productId: '',
    });
  };

  closeModalHandler = (isOpen) => {
    this.setState(
      {
        isOpen: !isOpen,
      },
      () => {
        this.clearInputs();
      },
    );
  };

  openModalHandler = (componentName) => {
    this.setState({
      isOpen: !this.state.isOpen,
      componentName: componentName,
    });
  };

  openEditModalHandler = (
    componentName,
    { id, name, price, image, description, pet_category, sub_category },
  ) => {
    this.setState({
      isOpen: !this.state.isOpen,
      componentName,
      formInput: {
        name: name,
        description: description,
        petCategory: pet_category,
        subCategory: sub_category,
        price: price,
        image: image,
      },
      productId: id,
    });
  };

  handleChange = (event) => {
    const { formInput } = this.state;
    const { name, value } = event.target;
    this.setState({ formInput: { ...formInput, [name]: value } });
  };

  handleCreateProduct = () => {
    const {
      products,
      formInput: { name, description, petCategory, subCategory, price, image },
    } = this.state;
    const { alertSuccess, alertError } = this.props;
    let cloneProducts = [...products];
    if (
      name.length &&
      description.length &&
      petCategory.length &&
      subCategory.length &&
      price.length &&
      image.length
    ) {
      Axios.post('/api/v1/products', {
        name,
        description,
        petCategory,
        subCategory,
        price,
        image,
      })
        .then(({ data: { data: newProduct } }) => {
          alertSuccess('Product Created Successfully');
          cloneProducts = [newProduct, ...products];
          this.setState({
            products: cloneProducts,
            isOpen: false,
            componentName: '',
          });
        })
        .catch(() => {
          alertError('Error Creating Product');
          this.clearInputs();
        });
    } else {
      alertError('Please fill all fields Correctly');
      this.clearInputs();
    }
  };
  handleUpdateProduct = () => {
    const {
      products,
      formInput: { name, description, petCategory, subCategory, price, image },
      productId,
    } = this.state;
    const { alertSuccess, alertError } = this.props;
    let cloneProducts = [...products];

    if (
      name.length &&
      description.length &&
      petCategory.length &&
      subCategory.length &&
      price.length &&
      image.length
    ) {
      Axios.patch(`/api/v1/products/product/${productId}`, {
        name,
        description,
        petCategory,
        subCategory,
        price,
        image,
      })
        .then(({ data: { data } }) => {
          const updateProducts = cloneProducts.find(
            ({ id }) => productId === id,
          );
          updateProducts.name = name;
          updateProducts.description = description;
          updateProducts.image = image;
          updateProducts.price = price;
          updateProducts.pet_category = petCategory;
          updateProducts.sub_category = subCategory;
          this.clearInputs();

          alertSuccess('Product Updated Successfully');
        })
        .catch(() => {
          alertError('Error Creating Product');
          this.clearInputs();
        });
    } else {
      alertError('Please fill all fields Correctly');
      this.clearInputs();
    }
  };

  render() {
    const {
      filteredProducts,
      isOpen,
      componentName,
      hasErrorValidation,
      formInput,
      priceRange,
    } = this.state;
    const {
      alertSuccess,
      alertError,
      updateNumberCartProduct,
      updateCartProduct,
      isLogin,
    } = this.props;

    const productsList = filteredProducts.map((product) => (
      <Product
        key={product.id}
        product={product}
        openEditModalHandler={this.openEditModalHandler}
        deleteHandler={this.deleteHandler}
        alertSuccess={alertSuccess}
        alertError={alertError}
        updateNumberCartProduct={updateNumberCartProduct}
        updateCartProduct={updateCartProduct}
        isLogin={isLogin}
      />
    ));

    const componentsLookUp = { CreateProduct, UpdateProduct };
    let renderComponent;
    if (componentName) {
      const SelectedComponent = componentsLookUp[componentName];
      if (SelectedComponent) {
        renderComponent = (
          <SelectedComponent
            handleChange={this.handleChange}
            handleCreateProduct={this.handleCreateProduct}
            handleUpdateProduct={this.handleUpdateProduct}
            hasErrorValidation={hasErrorValidation}
            formInput={formInput}
          />
        );
      }
    }

    return (
      <div className='container'>
        <PetFilter handlePetSelection={this.handlePetSelection} />
        <ProductsFilter
          handleSearch={this.handleSearch}
          handleSelect={this.handleSelect}
          openModalHandler={this.openModalHandler}
          isLogin={isLogin}
        />
        <PriceFilter
          priceRange={priceRange}
          handlePriceRange={this.handlePriceRange}
        />

        <section className='products-section' id='products'>
          {this.state.filteredProducts.length === 0 && (
            <h1>No Products Found</h1>
          )}
          {!this.state.products.length && <div class='loader'>Loading...</div>}

          {productsList}
        </section>

        {isOpen && (
          <Modal closeModalHandler={() => this.closeModalHandler(isOpen)}>
            {renderComponent}
          </Modal>
        )}
      </div>
    );
  }
}

export default ProductsList;
