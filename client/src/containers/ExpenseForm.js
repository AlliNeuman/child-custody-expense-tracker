import React, { Component } from 'react';
import '../App.css';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      reimbursePercent: '',
      expensePaid: ''
    }
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();

  }

  render() {
    return (
      <div className="container">
        <form id="expense-form" onSubmit={this.onSubmit.bind(this)}>
          <input>
          <input>
          <input>
          <input>
          <input>
          <input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default ExpenseForm;
