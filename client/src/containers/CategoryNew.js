import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createCategory } from '../actions/categoryActions'


class CategoryNew extends Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)

    this.state = {
      name: ''
    }


  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createCategory({
      category: {
        name: this.state.name,
    }})

  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
        [name]: value
    });
  }

  render() {

    return (
      <React.Fragment>
      <div className="container justify-content-left">
      <h3>Add a Category</h3>
      <form id="category-form" onSubmit={this.handleOnSubmit}>
        <div className="form-group form-row">
          <div className="col-sm">
          <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          />
          </div>
        </div>

        <input
        type="submit"
        className="btn btn-primary" />
      </form>
    </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createCategory: createCategory,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNew);
