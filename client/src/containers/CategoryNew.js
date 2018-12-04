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

    console.log(this.state)

    // debugger

    this.props.createCategory({
      category: {
        name: this.state.name,
    }});
    console.log(this.state.category))

// debugger
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
    fetchCategories: fetchCategories,
    createExpense: createExpense,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseNew);
