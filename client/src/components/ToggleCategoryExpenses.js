import React from 'react';
import ExpenseDetail from './ExpenseDetail';

  const ToggleCategoryExpenses = ({categories}) => {
    const renderCategoryExpenses = categories.map((category, index) => {
      const expenses = ((category || {}).expenses || {})
      return (
          <div className="row form-card-display" key={category.id}>
            <div className="collapse multi-collapse" id={category.id}>
              <ExpenseDetail expenses={expenses} />
            </div>
          </div>
      )
    })
// debugger
  return (
    <React.Fragment>
      {renderCategoryExpenses}
    </React.Fragment>
  )
}

export default ToggleCategoryExpenses;
