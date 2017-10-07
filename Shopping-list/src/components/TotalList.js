import React, { Component } from 'react';



class TotalList extends Component {

  handleClick() {
    this.props.handleTotalClick(this.props.id)
  }

  render() {
    return (
      <div className="total-list">
        <button onClick={this.handleClick.bind(this)} type="button" name="button">Calcular precio</button>
        <span>{this.props.totalPrice}</span>
      </div>
    );
  }
}

export default TotalList;
