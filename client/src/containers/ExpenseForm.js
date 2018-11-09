import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createExpense } from '../actions/expenseActions';
import { FormControl, FormGroup } from 'react-bootstrap';

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

    )
  }
}

export default ExpenseForm;
