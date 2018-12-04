import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ParentObligation from './ParentObligation';
import ExpensePaidButton from './ExpensePaidButton';

class ExpenseListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      date: props.date,
      category: props.category,
      description: props.description,
      amount: props.amount,
      reimburse_percent: props.reimburse_percent
    }
  }

  render() {
    return (
      <React.Fragment>
      <div className="table row text-center">
        <
        div className="col">
          <Link className="text-dark" to={`/expenses/${this.state.id}`}>
          {this.state.date}
          </Link>
        </div>

        <div className="col">
          {this.state.category}
        </div>

        <div className="col">
          {this.state.description}
        </div>

        <div className="col">
          {this.state.amount}
        </div>

        <div className="col">
          {this.state.reimburse_percent}
        </div>

        <div className="col">

        </div>
        </div>
    </React.Fragment>
    )
  }
}

export default ExpenseListItem;
