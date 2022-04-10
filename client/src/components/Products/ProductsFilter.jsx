import React, {Component} from 'react';

class ProductsFilter extends Component {
  state = {
    searchValue: '',
  };

  handleSearch = event => {
    this.setState({searchValue: event.target.value});
    this.props.handleSearch(event);
  };

  render() {
    return (
      <div className="inputs-section">
        <input placeholder="Search for product" onChange={this.handleSearch} />
        <select>
          <option>All</option>
          <option>Food</option>
          <option>Accessories</option>
          <option>Toy</option>
        </select>
      </div>
    );
  }
}

export default ProductsFilter;
