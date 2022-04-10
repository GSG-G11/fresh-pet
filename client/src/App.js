import React, { Component } from 'react'
import Header from './components/Header/Header'
import LandingImage from './components/Header/LandingImage'
import ProductsList from './components/Products/ProductsList'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LandingImage />
        <ProductsList />
      </div>
    )
  }
}

export default App
