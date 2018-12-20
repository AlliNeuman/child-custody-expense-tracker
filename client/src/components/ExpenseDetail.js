import React from 'react';

const ExpenseDetail = (props) => {

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
    )
}


export default ExpenseDetail;
