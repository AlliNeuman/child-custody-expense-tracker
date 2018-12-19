import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseDetail from '../components/ExpenseDetail';
import {fetchExpenses} from '../actions/expenseActions';


class ExpensePage extends Component {

  componentDidMount = () => {
    this.props.fetchExpense(this.props.expense)
  }
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
    expense: state.expense
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchExpense: fetchExpense
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensePage);
