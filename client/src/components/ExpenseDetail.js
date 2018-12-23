import React from 'react';

const ExpenseDetail = ({expenses}) => {
  const renderExpenses = expenses.map((expense, index) => {
    return (
      <div className="card card-body" key={expense.id}>
        <h5 className="card-title">{expense.date}</h5>
          <div className="card-text">
            {expense.description}
          </div>

          <div className="card-text">
            {expense.amount}
          </div>

          <div className="card-text">
            {expense.reimburse_percent}
          </div>

          <div className="card-text">
            {expense.obligation}
          </div>

          <div className="card-text danger">
            {expense.paid}
          </div>
      </div>
    )
  })

  return (
    <React.Fragment>
      {renderExpenses}
    </React.Fragment>
  )
}


export default ExpenseDetail;
