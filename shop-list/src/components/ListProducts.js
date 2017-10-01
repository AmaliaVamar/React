import React, { Component } from 'react';
import Product from './Product';

class ListProducts extends Component {
  render() {
    return (
      <ul className='article-list'>
        {this.props.data.map((product) =>
           <Product
            key={product.id}
            productName={product.productName}
            amount={product.amount}
            category={product.category}
            description={product.description}
            price={product.price}
          />
        )}
      </ul>
    );
  }
}

export default ListProducts;
