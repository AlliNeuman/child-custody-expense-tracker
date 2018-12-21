import React from 'react';
import ExpenseNew from '../containers/ExpenseNew';
import CategoryNew from '../containers/CategoryNew';

export const ToggleExpenseFormCard = (props) => {
  return (
    <div className="row form-card-display">
      <div className="collapse multi-collapse" id="new-expense">
        <div className="card card-body">
          <ExpenseNew categories={props.categories}/>
        </div>
      </div>
    </div>
  )
}

export const ToggleCategoryFormCard = () =>
  <div className="row form-card-display">
    <div className="collapse multi-collapse" id="new-category">
      <div className="card card-body">
        <CategoryNew />
      </div>
    </div>
  </div>
