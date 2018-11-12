import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="my-2 py-2">
        <input
          placeholder="Search by Category"
          value={this.state.term}
          onChange={this.onInputChange} />
      </div>
    );
  }

  onInputChange = event => {
    this.setState({
      term: event.target.value
    })
  }
}

export default SearchBar;
