import React from 'react';

export const ToggleAllFormsButton = () => {
  return (
    <React.Fragment>
    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="new-expense new-category"
    >
    All Forms
    </button>
    </React.Fragment>
  )
}

export const ToggleExpenseFormButton = () =>
    <React.Fragment>
    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#new-expense" aria-expanded="false" aria-controls="new-expense"
    >
    New Expense
    </button>
    </React.Fragment>


export const ToggleCategoryFormButton = () => {
  return (
    <React.Fragment>
    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#new-category" aria-expanded="false" aria-controls="new-category">
      New Category
    </button>
    </React.Fragment>
  )
}
