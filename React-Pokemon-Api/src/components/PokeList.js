import React, { Component } from 'react';
import Pokecard from './Pokecard';

class PokeList extends Component {
  render() {
    return (
      <div>
        <ul className ="pokeList">
          {this.props.listPokemons.map(pokemon =>
            <Pokecard
              key={pokemon.id}
              handleFavClick={this.props.markPokemonAsFav}
              {...pokemon} />
          )}
        </ul>
      </div>
    );
  }
}

export default PokeList;
