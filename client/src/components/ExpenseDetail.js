import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ExpenseDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expense: props.expense
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <Link className="text-dark" to={`/expenses/${this.state.expense.id}`}> {this.state.expense.date}
          </Link>
        </div>

        <div className="col">
        {this.props.expense.category}
        </div>

        <div className="col">
        {this.props.expense.description}
        </div>

        <div className="col">
        {this.props.expense.amount}
        </div>

        <div className="col">
        {this.props.expense.reimburse_percent}
        </div>

        <div className="col">
        {this.props.expense.obligation}
        </div>

        <div className="col">
        {this.props.expense.paid}
        </div>
      </div>
    )
  }
}


export default ExpenseDetail;
