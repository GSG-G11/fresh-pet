import React, { Component } from 'react';
import Axios from 'axios';

import { toast } from 'react-toastify';

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

  deleteHandler = (id) => {
    const { products } = this.state;
    const filteredProducts = products.filter((product) => product.id !== id);
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

  openEditModalHandler = (componentName, formInput) => {
    this.setState({
      isOpen: !this.state.isOpen,
      componentName,
    });
  };

  handleChange = (event) => {
    const { formInput } = this.state;
    const { name, value } = event.target;
    this.setState({ formInput: { ...formInput, [name]: value } });
  };

  alertSuccess = () => {
    return toast.success('Create Product SuccessFully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  alertError = () => {
    return toast.error('Create Product Failed', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  handleCreateProduct = () => {
    const {
      products,
      formInput: { name, description, petCategory, subCategory, price, image },
    } = this.state;
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
          this.alertSuccess();
          cloneProducts = [newProduct, ...products];
          console.log(cloneProducts);
          this.setState({
            products: cloneProducts,
            isOpen: false,
            componentName: '',
          });
        })
        .catch(() => {
          this.alertError();
          this.clearInputs();
        });
    } else {
      this.alertError();
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
    } = this.state;
    const componentsLookUp = { CreateProduct, UpdateProduct };
    const productsList = filteredProducts.map((product) => (
      <Product
        key={product.id}
        product={product}
        deleteHandler={this.deleteHandler}
      />
    ));

    let renderComponent;
    if (componentName) {
      const SelectedComponent = componentsLookUp[componentName];
      if (SelectedComponent) {
        renderComponent = (
          <SelectedComponent
            handleChange={this.handleChange}
            handleCreateProduct={this.handleCreateProduct}
            hasErrorValidation={hasErrorValidation}
            formInput={formInput}
          />
        );
      }
    }

    return (
      <div className='container'>
        <PetFilter />
        <ProductsFilter
          handleSearch={this.handleSearch}
          handleSelect={this.handleSelect}
          openModalHandler={this.openModalHandler}
        />

        <section className='products-section'>
          {this.state.filteredProducts.length === 0 && (
            <h1>No Products Found</h1>
          )}
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
