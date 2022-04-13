import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import {
  Header,
  LandingImage,
  NotFound,
  Cart,
  ProductsList,
  ProductDetails,
  Modal,
  LoginForm,
  Footer,
} from './components';

class App extends Component {
  state = {
    numberCartProduct: 0,
    cartProduct: [],
    isLogin: false,
    isOpenModalAuth: false,
    username: '',
  };

  updateNumberCartProduct = () => {
    this.setState({
      numberCartProduct: JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products')).length
        : 0,
    });
  };
  updateCartProduct = () => {
    this.setState({
      cartProduct: JSON.parse(localStorage.getItem('products')),
    });
  };

  deleteCartProduct = (productId) => {
    const { cartProduct } = this.state;
    const filteredCartProducts = cartProduct.filter(
      ({ id }) => id !== productId,
    );

    localStorage.setItem('products', JSON.stringify(filteredCartProducts));

    this.alertSuccess('Delete From Cart Successfully');
    this.setState({
      cartProduct: filteredCartProducts,
    });
    this.updateNumberCartProduct();
  };

  checkOut = () => {
    localStorage.setItem('products', JSON.stringify([]));
    this.setState({ cartProduct: [] });
    this.updateNumberCartProduct();
    this.alertSuccess(
      'Nice to see you, this product will be delivered to you as soon as possible',
    );
  };

  componentDidMount() {
    this.updateNumberCartProduct();
    this.updateCartProduct();
    this.checkIsLogin();
  }

  alertSuccess = (message) => {
    return toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  alertError = (message) => {
    return toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  openModalAuthHandler = (isOpen) => {
    this.setState({
      isOpenModalAuth: isOpen,
    });
  };

  checkIsLogin = () => {
    this.setState({
      isLogin: JSON.parse(localStorage.getItem('isLogin')) ?? false,
    });
  };

  handleLoginIn = (username) => {
    if (!username) {
      this.alertError('Please enter your username');
      this.openModalAuthHandler(false);
      this.setState({
        isLogin: false,
        username: '',
      });
      return;
    }

    localStorage.setItem('isLogin', true);
    localStorage.setItem('username', username);
    this.setState({
      isLogin: true,
      username: username,
    });
    this.alertSuccess('Login SuccessFully');
    this.openModalAuthHandler(false);
  };

  handleLoginOut = () => {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('username');
    this.setState({
      isLogin: false,
      username: '',
    });
    this.alertSuccess('Logout SuccessFully');
    this.openModalAuthHandler(false);
  };

  handleChangeUserName = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      numberCartProduct,
      cartProduct,
      isLogin,
      isOpenModalAuth,
      username,
    } = this.state;

    const usernameLoggedIn = localStorage.getItem('username');

    return (
      <BrowserRouter>
        <div>
          <Header
            isLogin={isLogin}
            usernameLoggedIn={usernameLoggedIn}
            handleLoginOut={this.handleLoginOut}
            numberCartProduct={numberCartProduct}
            openModalAuthHandler={this.openModalAuthHandler}
          />
          <LandingImage />
          <Switch>
            <Route
              path='/product/:id'
              render={(props) => (
                <ProductDetails
                  alertSuccess={this.alertSuccess}
                  alertError={this.alertError}
                  updateNumberCartProduct={this.updateNumberCartProduct}
                  updateCartProduct={this.updateCartProduct}
                  {...props}
                />
              )}
            />
            <Route
              path='/cart'
              render={(props) => (
                <Cart
                  cartProduct={cartProduct}
                  updateCartProduct={this.updateCartProduct}
                  deleteCartProduct={this.deleteCartProduct}
                  checkOut={this.checkOut}
                  {...props}
                />
              )}
            />
            <Route path='/notFound' component={NotFound} />
            <Route
              path='/'
              render={() => (
                <ProductsList
                  isLogin={isLogin}
                  alertSuccess={this.alertSuccess}
                  alertError={this.alertError}
                  updateNumberCartProduct={this.updateNumberCartProduct}
                  cartProduct={cartProduct}
                  updateCartProduct={this.updateCartProduct}
                />
              )}
              exact
            />
            <Redirect to='notFound' />
          </Switch>
          <Footer />
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          {isOpenModalAuth && (
            <Modal
              username={username}
              closeModalHandler={() => this.openModalAuthHandler(false)}>
              <LoginForm
                handleLoginIn={this.handleLoginIn}
                handleChangeUserName={this.handleChangeUserName}
                username={username}
              />
            </Modal>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
