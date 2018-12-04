import React from 'react';
import ExpenseDetail from './ExpenseDetail';
// import { ListGroup } from 'react-bootstrap';

const ExpenseList = (props) => {
  // debugger
  const renderExpenses = props.expenses.map((expense) => {
    return (
      <ExpenseDetail key={expense.id} expense={expense} />
    )
  }
)
  return (
    <div className="ExpensesList">
      <div>{renderExpenses}</div>
    </div>
  )
}


export default ExpenseList;
