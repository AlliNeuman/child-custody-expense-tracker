import React from 'react';
import {ToggleAllFormsButton} from '../components/ToggleButtons';
import {ToggleExpenseFormButton, ToggleCategoryFormButton} from '../components/ToggleButtons';
import {ToggleExpenseFormCard, ToggleCategoryFormCard} from '../components/ToggleFormCards';

const ToggleForms = (props) => {
  // debugger
  return (
    <React.Fragment>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <ToggleAllFormsButton />
        <ToggleExpenseFormButton />
        <ToggleCategoryFormButton />
      </div>


        <ToggleExpenseFormCard categories={props.categories}/>
        <ToggleCategoryFormCard />

    </React.Fragment>
  )
}

export default ToggleForms;
