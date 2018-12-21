import React from 'react';
import ExpenseDetail from './ExpenseDetail';

const CategoryToggle = ({categories}) => {
// debugger
  const categoryToggleDisplay = categories.map((category, index) => {
      return (
        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#{category.name}" aria-expanded="false" aria-controls={category.name} key={category.name}>{category.name}
      </button>
    )})

  const expensesToggleDisplay = categories.map((category, index) => {
    category.expenses.map((expense, index) => {
      return (
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id={expense.category}>
              <div className="card card-body">
                <h5 className="card-title">{expense.date}</h5>
                  <div className="card-text">
                    {expense.description}
                  </div>

                  <div className="card-text">
                    {expense.amount}
                  </div>

                  <div className="card-text">
                    {expense.paid}
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    })
  })

  // debugger
  return (
    <React.Fragment>
    <div className="pagination-centered btn-group btn-group-toggle" data-toggle="buttons">
    {categoryToggleDisplay}
    {expensesToggleDisplay}
    </div>
  </React.Fragment>
  )
}

export default CategoryToggle;
