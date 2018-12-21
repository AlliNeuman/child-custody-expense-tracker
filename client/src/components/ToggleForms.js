import React from 'react';
// import ExpenseNew from '../containers/ExpenseNew';
// import CategoryNew from '../containers/CategoryNew';
import {ToggleAllFormsButton} from '../components/ToggleButtons';
import {ToggleExpenseFormButton} from '../components/ToggleButtons';
import {ToggleCategoryFormButton} from '../components/ToggleButtons';
import {ToggleExpenseFormCard} from '../components/ToggleFormCards';
import {ToggleCategoryFormCard} from '../components/ToggleFormCards';

const ToggleForms = (props) => {
  // debugger
  return (
    <React.Fragment>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <ToggleAllFormsButton />
        <ToggleExpenseFormButton />
        <ToggleCategoryFormButton />
      </div>


        <ToggleExpenseFormCard />
        <ToggleCategoryFormCard />

    </React.Fragment>
  )
}

export default ToggleForms;
