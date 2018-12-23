import React from 'react';
import {ToggleCategoryFormButton, ToggleCategoryButtons} from '../components/ToggleButtons';
import {ToggleCategoryFormCard} from './ToggleFormCards';
import ToggleCategoryExpenses from './ToggleCategoryExpenses';

const ToggleCategoriesPage = (props) => {
  // debugger
  return (
    <React.Fragment>
      <div className="btn-group btn-group-toggle"
      data-toggle="buttons">
      <ToggleCategoryFormButton />
      <ToggleCategoryButtons categories={props.categories}/>
      </div>
      <ToggleCategoryFormCard />
      <ToggleCategoryExpenses categories={props.categories}/>
    </React.Fragment>
  )
}

export default ToggleCategoriesPage;
