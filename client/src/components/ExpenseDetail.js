import React from 'react';

const ExpenseDetail = ({ expense }) => {
  return (
    <div className="row">
      <div className="col"> { expense.date } </div>
      <div className="col"> { expense.category } </div>
      <div className="col"> { expense.description } </div>
      <div className="col"> { expense.amount } </div>
      <div className="col"> { expense.reimburse } </div>
      <div className="col"> { expense.obligation } </div>
      <div className="col"> { expense.paid } </div>
    </div>
  )
}

export default ExpenseDetail;
