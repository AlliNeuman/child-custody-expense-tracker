import React from 'react';

let total = 0.0;

const Totals = ({expensesList}) => {

  const renderOutstanding =
    expensesList.forEach(expense => {
     if (!expense.paid) {
      total += parseFloat(expense.amount).toFixed(2)
    }
  })


return (
  <div id="totals" className="container" col="row">
  <h3>Total Expenses Outstanding:</h3>
  {total}
  </div>
)
}

export default Totals;
