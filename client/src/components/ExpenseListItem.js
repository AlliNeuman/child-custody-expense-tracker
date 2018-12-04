import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ParentObligation from './ParentObligation';
import ExpensePaidButton from './ExpensePaidButton';

class ExpenseListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expense: props.expense
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <Link className="text-dark" to={`/expenses/${this.state.expense.id}`}>
          {this.state.expense.date}
          </Link>
        </div>

        <div className="col">
          {this.state.expense.category}
        </div>

        <div className="col">
          {this.state.expense.description}
        </div>

        <div className="col">
          {this.state.expense.amount}
        </div>

        <div className="col">
          {this.state.expense.reimburse_percent}
        </div>

    </div>
    )
  }
}

export default ExpenseListItem;
