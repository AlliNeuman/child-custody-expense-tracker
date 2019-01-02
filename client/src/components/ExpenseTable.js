import React from 'react';
import ExpenseListItem from '../components/ExpenseListItem.js';

const ExpenseTable = ({expensesList}) => {

  const renderExpenses = expensesList.sort((a,b) => (b.votes - a.votes)).map((expense, index) => {
    const category = ((expense || {}).category || {}).name;
    // debugger
    return (
      <tr key={expense.id}>
      <ExpenseListItem
        key={expense.id}
        id={expense.id}
        date={expense.date}
        category={category}
        description={expense.description}
        amount={expense.amount}
        reimburse_percent={expense.reimburse_percent}
        paid={expense.paid}
        votes={expense.votes}
/>
  </tr>
    )
  }
)

// debugger
    return (
      <React.Fragment>
      <div id="expense-table">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
        <tr>
        <th scope="col">Date</th>
        <th scope="col">Category</th>
        <th scope="col">Description</th>
        <th scope="col">Amount</th>
        <th scope="col">Reimbursement Factor</th>
        <th scope="col">Parent Obligation</th>
        <th scope="col">Expense Paid</th>
        <th scope="col">Change Selection</th>
        </tr>
        </thead>

        <tbody className="table-hover">
        {renderExpenses}
        </tbody>
      </table>
      </div>
      </React.Fragment>
    )
  }


export default ExpenseTable;
