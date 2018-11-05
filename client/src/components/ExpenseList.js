import React, { Component } from 'react';
import ExpenseListItem from './ExpenseListItem';

export default class ExpenseList extends Component {
  renderList() {
    return this.props.expenses.map((expense) => {
      return (
        <tr key={expense.id}>
        <td>{expense.date}</td>
        <td>{expense.category}</td>
        <td>{expense.description}</td>
        <td>{expense.amount}</td>
        <td>{expense.reimbursePercent}</td>
        <td>This is a calculation</td>
        <td>{expense.outstandingAmount}</td>
        <td>Add button for paid</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
      {this.renderList()}
      </table>
    )
  }
}
