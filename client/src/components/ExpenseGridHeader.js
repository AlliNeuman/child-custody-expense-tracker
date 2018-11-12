import React from 'react';

const ExpenseGridHeader = ({expenseHeaderNames}) => (
  <div className="row">
  {expenseHeaderNames.map(expenseHeaderName => (
    <div className="col">
    <strong>{expenseHeaderName.th}</strong>
    </div>
  ))}
  </div>
)


export default ExpenseGridHeader;
