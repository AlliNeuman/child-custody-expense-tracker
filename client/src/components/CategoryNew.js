import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCategory } from '../actions/categoryActions';

class CategoryNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   this.props.createCategory(this.state);
  //   this.setState({
  //     name: ''
  //   })
  // }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={this.handleOnChange} />
      </div>
    )
  }
}

export default connect(null, {createCategory})(CategoryNew);
