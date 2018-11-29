import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseForm from '../components/ExpenseForm';
import { createExpense } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';


class ExpenseNew extends Component {
  constructor() {
    super()

    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      reimburse_percent: '',
      paid: '',
    }
  }

  componentDidMount = () => {
    this.props.fetchCategories();
    console.log(this.state)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    debugger
    let category = this.state.category
    this.props.createExpense({
      expense: {
        date: this.state.date,
        category: this.state.category,
        description: this.state.description,
        amount: this.state.amount,
        reimburse_percent: this.state.reimburse_percent,
        paid: this.state.paid,
        category_attributes: {
          'name': category
      }
    }});
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
        [name]: value
    });
  }

  render() {
    const { categories } = this.props

    return (
      <React.Fragment>
      <div className="container justify-content-left">
      <h3>Add an Expense</h3>
      <ExpenseForm handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}
        categories={categories}
      />
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
    fetchCategories: fetchCategories,
    createExpense: createExpense,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseNew);
