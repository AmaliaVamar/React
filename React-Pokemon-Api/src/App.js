import React, { Component } from 'react';
import Search from './components/Search';
import PokeList from './components/PokeList';



class App extends Component {
  constructor(props){
    super(props);
    const numberOfPokemon = 50;
    const numbers = [...Array(numberOfPokemon).keys()].map(n => n +1);
    const pokemons = numbers.map(number =>({
      id: number,
      name: '',
      isFav: false
    }));

    this.state = {
      pokemons,
      filter: '',
      areFav: 0,
      currentPage: 1,
      pokemonPerPage: 20
    };
  }

  componentDidMount(){
    const baseURL = 'http://pokeapi.co/api/v2/';
    const pokemonURL = num => `${baseURL}pokemon/${num}/`;

    this.state.pokemons.map( pokemon =>
      fetch(pokemonURL(pokemon.id))
        .then(response =>
          response.json()
        )
        .then(json => {
          const{
            name,
            sprites: {front_default: image},
            types: [{type: {name: type}}]
          } = json;

          this.setState((prevState, props) => {
            const listPokemons = [...prevState.pokemons];
            listPokemons[pokemon.id - 1] = { ...pokemon, name, image, type};
            return {
              pokemons: listPokemons
            };
          });
        })
        .catch(function(e) {
        })
    );
  }


  favPokemon(){
    return  this.state.pokemons
      .filter(
        pokemon =>  pokemon.isFav === true & pokemon.name.includes(this.state.filter)
      );
  }

  handleFilterChange = query => {
    this.setState({
      filter: query,
      currentPage: 1
    });
  }

  getFilteredPokemon() {
    return this.state.pokemons
      .filter(
        pokemon => pokemon.name.includes(this.state.filter)
      );
  }


  getCurrentPokemon(){
    const {pokemonPerPage, currentPage} = this.state;

    const firstIndex = pokemonPerPage * (currentPage - 1);
    const lastIndex = pokemonPerPage * currentPage;

    if(this.state.areFav ===1){
      return this.favPokemon().slice(firstIndex, lastIndex);
    }else{
      return this.getFilteredPokemon()
        .slice(firstIndex, lastIndex);
    }
  }

  clickPrevious(){
    if (this.state.currentPage > 1) {
      this.setState(prevState => {
        return {
          currentPage: prevState.currentPage - 1
        }
      });
    }
  }

  clickNext(){
    const {currentPage, pokemonPerPage} = this.state;
    const totalPokemon = this.getFilteredPokemon();

    const lastPage = totalPokemon.length / pokemonPerPage;

    if (!this.isLastPage()) {
      this.setState(prevState => {
        return {
          currentPage: prevState.currentPage + 1
        }
      });
    }
  }

  isFirstPage() {
    return this.state.currentPage === 1;
  }

  isLastPage() {
    const {currentPage, pokemonPerPage} = this.state;
    const totalPokemon = this.getFilteredPokemon();
    const lastPage = Math.ceil(totalPokemon.length / pokemonPerPage);

    return currentPage === lastPage;
  }

  markPokemonAsFav(id) {
    this.setState((prevState, props) => {
      const listPokemons = [...prevState.pokemons];
      const pokemon = listPokemons[id - 1];

      listPokemons[id - 1] = {
        ...pokemon,
        isFav: !pokemon.isFav
      }

      return {
        pokemons: listPokemons
      };
    });
  }


  handleChangeFav = (event) => {
    var favValue = event.target.checked ? 1 : 0;

    this.setState({
      areFav: favValue,
      currentPage: 1
    });
  }



  render() {
    const nextButtonClass = this.isLastPage() ? 'hidden' : null;
    const prevButtonClass = this.isFirstPage() ? 'hidden' : null;

    return (
      <div className="container">
        <div className="filter-container">
          <Search onFilterChange={this.handleFilterChange} />
          <p>Favoritos</p>
          <input className="checkbox" type="checkbox" name="Favourite pokemon" value="favourite" onChange={this.handleChangeFav}/>
        </div>

        <PokeList listPokemons={this.getCurrentPokemon()} markPokemonAsFav={this.markPokemonAsFav.bind(this)}/>

        <div className = "inputContainer">
          <input className={prevButtonClass} type="button" value="20 Anteriores" onClick={this.clickPrevious.bind(this)} />
          <input className={nextButtonClass} type="button" value="20 Siguientes" onClick={this.clickNext.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
