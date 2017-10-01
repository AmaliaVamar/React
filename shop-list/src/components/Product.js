import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Product extends Component {
  render() {
    return (
      <li>
        <div className="product">
            <p>{this.props.amount}</p>
            <div>
              <p>{this.props.productName}</p>
              <p className ="product-description">{this.props.description}</p>
            </div>
            <p className ="product-category">{this.props.category}</p>
            <p>{this.props.price}</p>
        </div>
      </li>
    );
  }
}

Product.propTypes= {
  productName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
};

Product.defaultProps={
  description: 'No hay descripción'
};

export default Product;
