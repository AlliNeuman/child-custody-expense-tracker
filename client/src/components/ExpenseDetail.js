import React from 'react';

const ExpenseDetail = ({ expense }) => {
  return (
    <React.Fragment>
      <td> { expense.date } </td>
      <td> { expense.category } </td>
      <td> { expense.description } </td>
      <td> { expense.amount } </td>
      <td> { expense.reimburse } </td>
      <td> { expense.obligation } </td>
      <td> { expense.paid } </td>
    </React.Fragment>
  )
}

export default ExpenseDetail;
