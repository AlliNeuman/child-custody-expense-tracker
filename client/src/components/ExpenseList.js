import React from 'react';
import ExpenseDetail from './ExpenseDetail';
// import { ListGroup } from 'react-bootstrap';

const ExpenseList = (props) => {
  debugger
  const renderExpenses = props.expenses.map(expense => {
    return (
      <ExpenseDetail expense={expense} />
    )
  })
  return (
    <div className="ExpensesList">
    {renderExpenses}
    </div>
  )
}


export default ExpenseList;
