import React from 'react';

const Totals = (props) => {
// debugger
  return (
    <div className="row">
    <div className="card card-body warning" id="outstanding-expenses">
    <h3 className="text-dark">Outstanding Expenses</h3>
    <h5>Total Unpaid: ${props.outstandingTotal}</h5>
    </div>
    </div>
  )
}

export default Totals;
