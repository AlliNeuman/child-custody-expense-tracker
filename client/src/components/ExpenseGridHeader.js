import React from 'react';

const ExpenseGridHeader = ({expenseHeaderNames}) => (
  <thead>
    <tr>
  {expenseHeaderNames.map(expenseHeaderName => (
    <th scope="row" className="mx-1 px-3">
    {expenseHeaderName.th}
    </th>
  ))}
    </tr>
  </thead>
)


export default ExpenseGridHeader;
