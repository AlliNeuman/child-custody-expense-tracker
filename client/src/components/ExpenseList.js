import React from 'react';
import ExpenseListItem from 'react';

const ExpenseList = (props) => {
  if (props) {
    const expenses = props.expenses.map(expense => <ExpenseListItem key={expense.id} expense={expense} /> )
    return (
        <div className="expense-list">

        </div>
    )
  }
}

export default ExpenseList;
