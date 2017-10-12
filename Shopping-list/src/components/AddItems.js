import React, { Component } from 'react';

class AddItems extends Component {
  constructor(props){
    super(props);
    this.state = {
        errorAmount : "",
        errorName : "",
        errorDescription : "",
        errorCategory : "",
        errorPrice : ""
    }
  }
  handleAdd(e){
    e.preventDefault();
    let amount = parseInt(this.amount.value);
    let amountTest = isNaN(amount) === true || amount === 0;
    let productName = this.productName.value;
    let nameTest = productName === "";
    let description = this.description.value;
    let descriptionTest = description === "";
    let category = this.category.value;
    let price = parseFloat(this.price.value);
    let priceTest = isNaN(price) === true || price === 0

    if(amountTest || nameTest || descriptionTest || priceTest){
      amountTest ? this.setState({  errorAmount : "Introduzca una cantidad"}) : this.setState({  errorAmount : ""})
      nameTest ? this.setState({  errorName : "Introduzca un nombre"}) : this.setState({  errorName : ""})
      descriptionTest ? this.setState({  errorDescription : "Introduzca una descripción"}) : this.setState({  errorDescription : ""})
      priceTest ? this.setState({  errorPrice : "Introduzca un precio"}) : this.setState({  errorPrice : ""})
    } else {
        this.setState({
          errorAmount : "",
          errorName : "",
          errorDescription : "",
          errorCategory : "",
          errorPrice : ""
        })
        this.form.reset();
        this.props.handleAddClick(amount, productName, description, category, price);
    }
  }

  render() {

    return (
      <form action="" method="post" className="form" onSubmit={this.handleAdd.bind(this)} ref={(ref) => this.form = ref}>
        <div>
          <label htmlFor="amount">Cantidad</label>
          <input type="number" id="amount" min="0" ref={(ref) => this.amount = ref}></input>
          <span>{this.state.errorAmount}</span>
        </div>
        <div className = "form-info-container">
          <div>
            <label htmlFor="productName">Nombre producto</label>
            <input type="text" id="productName" ref={(ref) => this.productName = ref}></input>
            <span>{this.state.errorName}</span>
          </div>
          <div>
            <label htmlFor="description">Descripción</label>
            <input type="text" id="description" ref={(ref) => this.description = ref}></input>
            <span>{this.state.errorDescription}</span>
          </div>
        </div>
        <div>
          <label htmlFor="category">Categoría</label>
          <select id="category" ref={(ref) => this.category = ref}>
            <option value="Legumbres">Legumbres</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Cereales">Cereales</option>
            <option value="Verduras">Verduras</option>
            <option value="Frutas">Frutas</option>
          </select>
          <span>{this.state.errorCategory}</span>
        </div>
        <div>
          <label htmlFor="price">Precio</label>
          <input type="number" id="price" min="0" step=".01" ref={(ref) => this.price = ref}></input>
          <span>{this.state.errorPrice}</span>
        </div>
        <input className="input-submit" type="submit" value="Añadir"></input>
      </form>
    );
  }
}

export default AddItems;
