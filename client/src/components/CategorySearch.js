import React, { Component } from 'react';
import CategoryInput from './CategorySearch';

class CategorySearch extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }
  componentDidMount = () => {
    let initialCategories = [];
    fetch('http://localhost3000/categories')
    .then(resp => {
      return resp.json();
    }).then(data => {
      initialCategories = data.results.map((category) => {
        return category
      });
      console.log(initialCategories);
      this.setState({
        categories: initialCategories,
      });
    });
  }

  render() {
    return (
      <CategoryInput state={this.state}/>
    );
  }
}

export default CategorySearch;
