import React from 'react';
import _ from 'lodash';

const Totals = ({expensesList}) => {

  const outstandingExpenses =
    _.filter(expensesList, {'paid': false});
debugger
  const total = _.reduce(outstandingExpenses, function(sum, n) {
    return sum + n;
  }, 0);


return (
  <div id="totals" className="container" col="row">
  <h3>Total Expenses Outstanding:</h3>
  {total}
  </div>
)
}

export default Totals;
