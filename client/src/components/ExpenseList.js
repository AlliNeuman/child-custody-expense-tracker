import React from 'react';
import ExpenseDetail from './ExpenseDetail';
import { ListGroup } from 'react-bootstrap';

const ExpenseList = ({ expensesList }) => {
  if (expensesList) {
    const expenses = expensesList.map((expense, index) => {
      return (
        <ExpenseDetail key={index} expense={expense} />
      )
    })

    return (
      <div className="ExpensesList">
      {expenses}
      </div>
    )
  } else {
    return null;
  }
}


  export default ExpenseList;
