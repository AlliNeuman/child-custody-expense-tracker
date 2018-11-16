import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';


class CategoryAll extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    let initialCategories = [];
    fetch('http://localhost:3001/categories')
    .then(response => {
      return response.json();
    }).then(data => {
      initialCategories = data.results.map((category) => {
        return category
      });
      this.setState({
        categories = initialCategories,
      });
    });
  }

  render() {
    return (
      <CategoryAll state={this.state}/>
    );
  }
}

export default CategoryAll;
