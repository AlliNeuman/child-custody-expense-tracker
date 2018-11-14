import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createExpense} from '../actions/expenseActions';
import ExpenseForm from '../components/ExpenseForm';

class ExpenseNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      reimburse: '',
      obligation: '',
      paid: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createExpense, history } = this.props

    createExpense({
      expense: {
        date: this.state.date,
        category: this.state.category,
        description: this.state.description,
        amount: this.state.amount,
        reimburse: this.state.reimburse,
        obligation: this.state.obligation,
        paid: this.state.paid,
      }
    });
    history.push('/expenses');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
      <h3>Add a New Expense</h3>
      <ExpenseForm handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  
})

export default ExpenseNew;
