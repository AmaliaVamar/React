import React, { Component } from 'react';
import Product from './Product';

class ListProducts extends Component {

  render() {
    return (
      <ul className='article-list'>
        {this.props.data.map((product) =>
           <Product
            key={product.id}
            id={product.id}
            productName={product.productName}
            amount={product.amount}
            handleDecrement={this.props.decrementClick}
            handleIncrement={this.props.incrementClick}
            category={product.category}
            description={product.description}
            price={product.price}
            handleDelete={this.props.deleteClick}
          />
        )}
      </ul>
    );
  }
}

export default ListProducts;
