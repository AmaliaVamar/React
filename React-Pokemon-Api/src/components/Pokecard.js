import React, { Component } from 'react';

class Pokecard extends Component {

  handleClick() {
    this.props.handleFavClick(this.props.id);
  }

  render() {
    let iconClass = this.props.isFav ? 'glyphicon-star' : 'glyphicon-star-empty';
    const classList = `glyphicon ${iconClass}`;

    return (
        <li>
          <div className= "pokeCard">
            <p>{this.props.id}</p>
            <p>{this.props.name}</p>
            <img src={this.props.image} alt={this.props.name}/>
            <p>Type : {this.props.type}</p>
            <a onClick={this.handleClick.bind(this)}>
              <span className={classList}></span>
            </a>
          </div>
        </li>
    );
  }
}

export default Pokecard;
