import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createExpense } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';
import { fetchExpenses } from '../actions/expenseActions';


class ExpenseForm extends Component {
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
    this.props.fetchCategories()
  }

  handleOnSubmit = event => {
    event.preventDefault();
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
    return (
      <div className="container justify-content-left">
      <h3>Add an Expense</h3>
      <form onSubmit={(event) => this.handleSubmit(event)}>

        <input
          type="text"
          placeholder="Date"
          name="date"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.date}
          />

        <input
          type="text"
          placeholder="Category"
          name="category"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.category}
          />

        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.description}
          />

        <input
          type="text"
          placeholder="Amount"
          name="amount"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.amount}
          />

        <input
          type="text"
          placeholder="Reimbursement Percent"
          name="reimburse_percent"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.reimburse_percent}
          />

        <input
          type="text"
          placeholder="Paid"
          name="paid"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.paid}
          />

        <input type="submit" />
      </form>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createExpense: createExpense,
    fetchCategories: fetchCategories
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
