import React, { Component } from 'react';
import ListProducts from './components/ListProducts';
import TotalList from './components/TotalList.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products :[
        {
        id:1,
        amount:1,
        productName:"Arroz",
        description:"Arroz integral",
        category:"Legumbres",
        price:3},

        {
        id:2,
        amount:4,
        productName:"Lentejas",
        category:"Legumbres",
        price:8},

        {
        id:3,
        amount:8,
        productName:"Leche",
        description:"Leche sin Lactosa",
        category:"Lácteos",
        price:2},

        {
        id:4,
        amount:1,
        productName:"Queso",
        description:"Queso en lonchas",
        category:"Lácteos",
        price:5},
      ],
      total : 0
    }
  }

  getTotal(){
    let totalProducts = 0 ;
    this.state.products.map( product =>
      totalProducts += product.amount * product.price
    );
    this.setState({
      total : totalProducts
    });
  }

  render() {
    return (
      <div>
        <ListProducts
          data = {this.state.products}
        />
        <TotalList
          handleTotalClick ={this.getTotal.bind(this)}
          totalPrice ={this.state.total === 0 ? "" : this.state.total}
        />
      </div>
    );
  }
}

export default App;
