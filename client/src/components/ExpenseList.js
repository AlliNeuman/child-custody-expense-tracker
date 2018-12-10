import React from 'react';
import ExpenseListItem from './ExpenseListItem';
// import { ListGroup } from 'react-bootstrap';

const ExpenseList = ({expensesList}) => {
  const renderExpenses = expensesList.map((expense, index) => {
    return (
      <ExpenseListItem
        key={expense.id}
        id={expense.id}
        date={expense.date}
        category={expense.category.name}
        description={expense.description}
        amount={expense.amount}
        reimburse_percent={expense.reimburse_percent}
        paid={expense.paid}
/>
    )
  }
)
  return (
    <tbody>
      {renderExpenses}
    </tbody>
  )
}


export default ExpenseList;
