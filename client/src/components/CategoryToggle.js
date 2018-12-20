import React from 'react';
import ExpenseDetail from './ExpenseDetail';

const CategoryToggle = (props) => {
debugger
  const categoryToggleDisplay = props.categories.map((category, index) => {
        return (
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#${category.id}" aria-expanded="false" aria-controls="${category.id}" key={category.id}>{category.name}
        </button>
      )
      props.category.expenses.map((expense, index) => {
        return (
          <div className="row">
            <div className="col">
              <div className="collapse multi-collapse" id="${props.category_id}">
                <div className="card card-body">
                  <h5 className="card-title">{props.date}</h5>
                    <div className="card-text">
                      {props.description}
                    </div>

                    <div className="card-text">
                      {props.amount}
                    </div>

                    <div className="card-text">
                      {props.reimburse_percent}
                    </div>

                    <div className="card-text">
                      {props.obligation}
                    </div>

                    <div className="card-text danger">
                      {props.paid}
                    </div>
                  </div>
                </div>
              </div>
          </div>

        // <ExpenseDetail
        // key={expense.id}
        // id={expense.id}
        // date={expense.date}
        // description={expense.description}
        // amount={expense.amount}
        // reimburse_percent={expense.reimburse_percent}
        // paid={expense.paid}
        // category_id={expense.category_id}
        // />
        )
      }
    )
  })

  // debugger
  return (
    <React.Fragment>
    <div className="pagination-centered btn-group btn-group-toggle" data-toggle="buttons">
    {categoryToggleDisplay}

    </div>
  </React.Fragment>
  )
}

export default CategoryToggle;
