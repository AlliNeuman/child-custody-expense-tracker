import React from 'react';
import ExpenseNew from '../containers/ExpenseNew';
import CategoryNew from '../containers/CategoryNew';


const ToggleForms = (props) => {
  // debugger
  return (
    <React.Fragment>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">

      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="new-expense new-category">All Forms</button>

      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#new-expense" aria-expanded="false" aria-controls="new-expense">New Expense</button>

      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#new-category" aria-expanded="false" aria-controls="new-category">
        New Category
      </button>

      </div>

      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="new-expense">
            <div className="card card-body">
              <ExpenseNew categories={props.categories}/>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="collapse multi-collapse" id="new-category">
            <div className="card card-body">
              <CategoryNew />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ToggleForms;
