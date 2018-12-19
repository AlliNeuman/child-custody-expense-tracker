import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoryForm from '../components/CategoryForm';
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
      <CategoryForm handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
    </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createCategory: createCategory,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNew);
