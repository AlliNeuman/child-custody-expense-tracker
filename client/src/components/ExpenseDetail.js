import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ExpenseDetail = ({expense}) => {

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {expense.date}
          </h5>


        <Link className="text-dark card-link" to={`/categories/${expense.category_id}`}>
      {expense.category}
        </Link>

        <div className="card-text">
        {expense.description}
        </div>

        <div className="card-text">
        {expense.amount}
        </div>

        <div className="card-text">
        {expense.reimburse_percent}
        </div>

        <div className="card-text">
        {expense.obligation}
        </div>

        <div className="card-text danger">
        {expense.paid}
        </div>
      </div>
      </div>
    )
}


export default ExpenseDetail;
