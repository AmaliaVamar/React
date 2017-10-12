import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Product extends Component {

  handleClickDe(product) {
    this.props.handleDecrement(this)
  }

  handleClickIn(product){
    this.props.handleIncrement(this)
  }

  handleDelete(product){
  this.props.handleDelete(this)
}

  render() {
    return (
      <li>
        <div className="product" >
            <div className="product-counter">
              <button type="button" name="button" onClick={this.handleClickDe.bind(this)}>-</button>
              <p>{this.props.amount}</p>
              <button type="button" name="button" onClick={this.handleClickIn.bind(this)}>+</button>
            </div>
            <div className="product-description-container">
              <p>{this.props.productName}</p>
              <p className ="product-description">{this.props.description}</p>
            </div>
            <p className ="product-category">{this.props.category}</p>
            <p>{this.props.price}</p>
            <button type="button" className="product-delete" onClick={this.handleDelete.bind(this)}><img  src={require("../images/deleteItem.png")} alt="Delete Item"/></button>
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
