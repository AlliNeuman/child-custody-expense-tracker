import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchExpenses: fetchExpenses
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensePage);
