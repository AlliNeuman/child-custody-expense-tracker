import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseDetail from '../components/ExpenseDetail';
import {fetchExpense} from '../actions/expenseActions';


class ExpensePage extends Component {

  debugger


  render() {
    debugger
    return (
      <div className="container">

        <ExpenseDetail expense={this.props.expense} />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expense = state.expenses.find(expense => expense.id === ownProps.match.params.expenseId) || {}
  console.log(state)

  return {
    expense
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchExpense: fetchExpense
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensePage);
