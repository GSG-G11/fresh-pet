import React, {Component} from 'react';

class ProductsFilter extends Component {
  state = {
    searchValue: '',
    selectValue: '',
  };

  handleSearch = event => {
    this.setState({searchValue: event.target.value});
    this.props.handleSearch(event);
  };

  handleSelect = event => {
    this.setState({selectValue: event.target.value});
    this.props.handleSelect(event);
  };

  render() {
    return (
      <div className="inputs-section">
        <input placeholder="Search for product" onChange={this.handleSearch} />
        <select onChange={this.handleSelect}>
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="accessories">Accessories</option>
          <option value="toy">Toy</option>
        </select>
      </div>
    );
  }
}

export default ProductsFilter;
