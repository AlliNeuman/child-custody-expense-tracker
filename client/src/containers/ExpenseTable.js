import React from 'react';
import ExpenseListItem from '../components/ExpenseListItem.js';

const ExpenseTable = ({expensesList}) => {

  const renderExpenses = expensesList.map((expense, index) => {
    return (
      <ExpenseListItem
        key={expense.id}
        id={expense.id}
        date={expense.date}
        category={expense.category.name}
        description={expense.description}
        amount={expense.amount}
        reimburse_percent={expense.reimburse_percent}
        paid={expense.paid}
/>
    )
  }
)

    return (
      <div className="container" id="expense-table">
      <table className="table table-striped">
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

        <tbody className="table-hover">
        {renderExpenses}
        </tbody>
      </table>
      </div>
    )
  }


export default ExpenseTable;
