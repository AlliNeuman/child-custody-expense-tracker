import React from 'react';
import ExpenseListItem from './ExpenseListItem';

const ExpensesList = ({ expensesList }) => {
  if (expensesList) {
    const expenses = expensesList.map((expense, index) => {
      return (
        <ExpenseListItem key={index} expense={expense} />
      )
    })
    return (
      <div className="ExpensesList">
        <table>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Reimburse Percent</th>
          <th>Other Parent Obligation</th>
          <th>Outstanding Amount</th>
          </tr>
          {expenses}
        </table>
      </div>
    )
  } else {
    return null;
  }
}

export default ExpensesList;
