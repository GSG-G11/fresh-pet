import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ProductsList from './components/Products/ProductsList';
import ProductDetails from './components/Products/ProductDetails';
import Header from './components/Header/Header';
import LandingImage from './components/Header/LandingImage';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <LandingImage />
          <Switch>
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/notFound" component={NotFound} />
            <Route path="/" component={ProductsList} exact />
            <Redirect to="notFound" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
