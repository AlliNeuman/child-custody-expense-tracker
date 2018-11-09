import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createExpense } from '../actions/expenseActions';

class ExpenseForm extends Component {
  constructor(){
    super();

    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      reimburse: '',
      paid: ''
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createExpense(this.state)
    this.props.history.push('/expenses')
  }

  render() {
    return (
      <div className="expense-form">
      <h4>Add an Expense</h4>
      <form onSubmit={this.handleOnSubmit}>
        <FormGroup className="row">

        <FormControl
          type="text"
          name="date"
          placeholder="Enter Date"
          value={this.state.date}
          onChange={this.handleOnChange}
        />

        <FormControl
          type=""
          name="category"
          value={this.state.date}
          onChange={this.handleOnChange}
        />




    )
  }
}

export default ExpenseForm;
