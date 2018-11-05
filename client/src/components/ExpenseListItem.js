import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class ExpenseListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expense = props.expense
    }
  }

  render() {
    const expense = this.state.expense
    return (
      <tr>
      <Link className="text-dark" to={`/expenses/${expense.id}`}
        <td>{expense.date}</td>
        <td>{expense.category}</td>
        <td>{expense.description}</td>
        <td>{expense.amount}</td>
        <td>{expense.reimbursePercent}</td>
        <td>other parent obligation </td>
        <td>Outstanding amount</td>
        <td>Paid button</td>
      </tr>
    )
  }
}

export default ExpenseListItem;
