import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ExpenseDetail extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <Link className="text-dark" to={`/expenses/${props.expense.id}`}> {props.expense.date}
          </Link>
        </div>

        <div className="col">
        {props.expense.category}
        </div>

        <div className="col">
        {props.expense.description}
        </div>

        <div className="col">
        {props.expense.amount}
        </div>

        <div className="col">
        {props.expense.reimburse_percent}
        </div>

        <div className="col">
        {props.expense.obligation}
        </div>

        <div className="col">
        {props.expense.paid}
        </div>
      </div>
    )
  }
}


export default ExpenseDetail;
