import React, { Component } from 'react';
import ListProducts from './components/ListProducts';
import TotalList from './components/TotalList.js';
import AddItems from './components/AddItems.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products :[
        {
        id:1,
        amount: 0,
        productName:"Arroz",
        description:"Arroz integral",
        category:"Cereales",
        price:3},

        {
        id:2,
        amount:0,
        productName:"Lentejas",
        category:"Legumbres",
        price:8},

        {
        id:3,
        amount:0,
        productName:"Leche",
        description:"Leche sin Lactosa",
        category:"Lácteos",
        price:2},

        {
        id:4,
        amount:0,
        productName:"Queso",
        description:"Queso en lonchas",
        category:"Lácteos",
        price:5},
      ],
      total : 0
    }
  }

  handleAddItem(amount, productName, description, category, price){
      let product = {};
      let last = this.state.products.length-1;
      let lastProduct = this.state.products.length === 0 ? 1 : this.state.products[last].id;
      let id = lastProduct + 1;

      product = { id, amount, productName, description, category, price };

      this.setState({
        products : this.state.products.concat(product),
      })
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

  decrementButton(product){
    let decrement = product.props.amount -1;
    let auxList = this.state.products;
    let selectedProduct = auxList.find(item => item.id === product.props.id);
    let position = auxList.indexOf(selectedProduct);
    auxList[position].amount = decrement;
    if(auxList[position].amount < 0){
      auxList[position].amount = 0;
    }
    this.setState ({
      products: auxList
    })
  }

  incrementButton(product){
    let increment = product.props.amount +1;
    let auxList = this.state.products;
    let selectedProduct = auxList.find(item => item.id === product.props.id);
    let position = auxList.indexOf(selectedProduct);
    auxList[position].amount = increment;
    this.setState({
      products: auxList
    })
  }

  deleteButton(product){
  let clickProduct = product.props.id
  let listProducts = this.state.products
  let auxList = listProducts.filter(function(item) {
  return item.id !== clickProduct
  })
  this.setState({
    products: auxList
  })
}

  render() {
    return (
      <div className="container">
        <AddItems
          handleAddClick = {this.handleAddItem.bind(this)}
        />
        <ListProducts
          data = {this.state.products}
          decrementClick = {this.decrementButton.bind(this)}
          incrementClick = {this.incrementButton.bind(this)}
          deleteClick = {this.deleteButton.bind(this)}
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
