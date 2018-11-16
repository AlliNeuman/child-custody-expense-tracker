import React from 'react';

const ExpenseGridHeader = ({expenseHeaderNames}) => (
<thead>
    <tr>
  {expenseHeaderNames.map(expenseHeaderName => (
    <th className="mx-1 px-3" key={expenseHeaderName.th}>
    {expenseHeaderName.th}
    </th>
  ))}
    </tr>
</thead>

)


export default ExpenseGridHeader;
