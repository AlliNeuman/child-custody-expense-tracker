import React, { Component } from 'react';

class CategoryInput extends Component {
  constructor() {
    super();
  }

  render () {
    let categories = this.props.state.categories;
    console.log(categories);
    let optionItems = categories.map((category) => <option key={category.name}>{category.name}</option>
    );

    return (
      {optionItems}

      )
  }
}

export default CategoryInput;
