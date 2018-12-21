import React from 'react';
import {ToggleCategoryFormButton} from '../components/ToggleButtons';
import {ToggleCategoryFormCard} from '../components/ToggleFormCards';

const ToggleCategoriesPage = (props) => {
  return (
    <React.Fragment>
      <div className="btn-group btn-group-toggle"
      data-toggle="buttons">
      <ToggleCategoryFormButton />
      </div>
      <ToggleCategoryFormCard />
    </React.Fragment>
  )
}

export default ToggleCategoriesPage;
