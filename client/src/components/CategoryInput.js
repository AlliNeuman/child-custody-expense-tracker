import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CategoryInput extends Component {
  constructor() {
    super();
  }

  render () {
    let categories = this.props.state.categories;
    let optionCategories = categories.map((category) =>
    <option key={category.name}>{category.name}</option>
  );

    return (
      <div>
        <select>
          {optionCategories}
        </select>
      </div>
    )
  }
}

export default CategoryInput;
