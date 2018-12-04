import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ExpenseDetail extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <Link key={this.props.expense.id} to={`/expenses/${this.props.expense.id}`}> {this.props.expense.date}
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

        // <div className="col">
        // {this.props.expense.obligation}
        // </div>
        //
        // <div className="col">
        // {this.props.expense.paid}
        // </div>
      </div>
    )
  }
}


export default ExpenseDetail;
