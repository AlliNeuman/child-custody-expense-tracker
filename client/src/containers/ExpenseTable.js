import React, { Component } from 'react';

class ExpenseTable extends Component {

  render() {
    return (
      <div className="container">
      <table className="table">
        <thead className="thead-dark">
        <tr>
        <th scope="col">Date</th>
        <th scope="col">Category</th>
        <th scope="col">Description</th>
        <th scope="col">Amount</th>
        <th scope="col">Reimbursement Percent</th>
        <th scope="col">Parent Obligation</th>
        <th scope="col">Expense Paid</th>
        <th scope="col">Change Selection</th>
        </tr>
        </thead>

      </table>
      </div>
    )
  }
}

export default ExpenseTable;
