import React, { Component } from 'react';

class Search extends Component {

  handleChange = (event) => {
    this.props.onFilterChange(event.target.value);
  }

  render() {
    return (
      <div className ="search">
        <input type="text" placeholder="Search by name" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Search;
