import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

import {
  Header,
  LandingImage,
  NotFound,
  Cart,
  ProductsList,
  ProductDetails,
} from './components';

class App extends Component {
  state = {
    numberCartProduct: 0,
    cartProduct: [],
    isLogin: false,
  };

  checkIsLogin = () => {
    this.setState({isLogin: JSON.parse(localStorage.getItem('isLogin'))});
  };

  authenticationHandler = isLogin => {
    localStorage.setItem('isLogin', isLogin);
    this.setState({
      isLogin: isLogin,
    });
    this.alertSuccess(isLogin ? 'Login Success' : 'Logout Success');
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

  deleteCartProduct = productId => {
    const {cartProduct} = this.state;
    const filteredCartProducts = cartProduct.filter(({id}) => id !== productId);

    localStorage.setItem('products', JSON.stringify(filteredCartProducts));

    this.alertSuccess('Delete From Cart Successfully');
    this.setState({
      cartProduct: filteredCartProducts,
    });
    this.updateNumberCartProduct();
  };

  componentDidMount() {
    this.updateNumberCartProduct();
    this.updateCartProduct();
    this.checkIsLogin();
  }

  alertSuccess = message => {
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
  alertError = message => {
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

  render() {
    const {numberCartProduct, cartProduct, isLogin} = this.state;
    return (
      <BrowserRouter>
        <div>
          <Header
            isLogin={isLogin}
            authenticationHandler={this.authenticationHandler}
            numberCartProduct={numberCartProduct}
          />
          <LandingImage />
          <Switch>
            <Route
              path="/product/:id"
              render={props => (
                <ProductDetails
                  alertSuccess={this.alertSuccess}
                  alertError={this.alertError}
                  {...props}
                />
              )}
            />
            <Route
              path="/cart"
              render={props => (
                <Cart
                  cartProduct={cartProduct}
                  updateCartProduct={this.updateCartProduct}
                  deleteCartProduct={this.deleteCartProduct}
                  {...props}
                />
              )}
            />
            <Route path="/notFound" component={NotFound} />
            <Route
              path="/"
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
            <Redirect to="notFound" />
          </Switch>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
