import React, { Component } from 'react';

class CategoryAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.props.fetchCategories()
  };

  render() {
    return (
      <CategoryInput state={this.state}/>
    );
  }
}

export default CategoryAll;
