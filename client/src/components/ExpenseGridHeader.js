import React from 'react';

export const ExpenseGridHeader = () => {

  const expenseHeaderNames = ["Date", "Category", "Description", "Amount", "Reimbursement Percent", "Parent Obligation", "Expense Paid"]

  return (
    <div className="row">
      expenseHeaderNames.map(name => {
        <div className="col">
          <strong>{name}</strong>
          </div>
        }
      )
      </div>
    )
}
