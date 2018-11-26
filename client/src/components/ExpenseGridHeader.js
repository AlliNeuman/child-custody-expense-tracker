import React, { Component } from 'react';

class ExpenseGridHeader extends Component {

  render() {
    const expenseHeaderNames = [
      {th: "Date"},
      {th: "Category"},
      {th: "Description"},
      {th: "Amount"},
      {th: "Reimbursement Percent"},
      {th: "Parent Obligation"},
      {th: "Expense Paid"}
    ];

    return (
      <React.Fragment>
      <div className="row">
      {expenseHeaderNames.map(expenseHeaderName =>
            <div className="col mx-1 px-3" key={expenseHeaderName.th}>
            {expenseHeaderName.th}
            </div>)}
          </div>
      </React.Fragment>
    )
  }
}

export default ExpenseGridHeader;
