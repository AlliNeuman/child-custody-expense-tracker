import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseDetail from '../components/ExpenseDetail';
import {fetchExpenses} from '../actions/expenseActions';


class ExpensePage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">

        <ExpenseDetail expense={this.props.expense} />

      </div>
    )
  }
}
