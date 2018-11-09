import React from 'react';
import ExpenseListItem from 'react';
import { ListGroup } from 'react-bootstrap';

const ExpenseList = ({ expenses }) => {
  const renderExpenses = expenses.map(expense =>
    <ExpenseListItem key={expense.id} expense={expense} />
  );

  return (
    <div className="expense-list">
    <ListGroup>
      {renderExpenses}
    </ListGroup>
    </div>
  )
}


export default ExpenseList;
