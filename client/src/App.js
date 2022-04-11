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
} from './components';

class App extends Component {
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

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <LandingImage />
          <Switch>
            <Route path='/product/:id' component={ProductDetails} />
            <Route path='/cart' component={Cart} />
            <Route path='/notFound' component={NotFound} />
            <Route
              path='/'
              render={() => (
                <ProductsList
                  alertSuccess={this.alertSuccess}
                  alertError={this.alertError}
                />
              )}
              exact
            />
            <Redirect to='notFound' />
          </Switch>

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
          <ToastContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
