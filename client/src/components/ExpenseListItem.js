import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const a = this.state.amount;
    const b = this.state.reimburse_percent
    const parentObligation = parseFloat(a*b).toFixed(2)

    return (
      <React.Fragment>
      <tr>
        <td className="col mx-1 px-3">
          <Link className="text-dark" to={`/expenses/${this.state.id}`}>
          {this.state.date}
          </Link>
        </td>

        <td className="col mx-1 px-3">
          {this.state.category}
        </td>

        <td className="col mx-1 px-3">
          {this.state.description}
        </td>

        <td className="col mx-1 px-3">
          ${this.state.amount}
        </td>

        <td className="col mx-1 px-3">
          {this.state.reimburse_percent}
        </td>
        <td>
        ${parentObligation}
        </td>


        </tr>
    </React.Fragment>
    )
  }
}

export default ExpenseListItem;
