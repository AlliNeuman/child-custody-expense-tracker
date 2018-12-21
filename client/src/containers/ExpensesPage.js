import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExpenses } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';
// import ExpenseGridHeader from '../components/ExpenseGridHeader';
// import ExpenseNew from './ExpenseNew';
import CategoryNew from './CategoryNew'
;import ExpenseNew from './ExpenseNew';
import ExpenseTable from '../components/ExpenseTable';
import ToggleForms from '../components/ToggleForms';
import Totals from '../components/Totals';

class ExpensesPage extends Component {

  componentDidMount = () => {
    this.props.fetchExpenses();
    this.props.fetchCategories();
  }

  render() {
// debugger
  let hasData = (this.props.expenses)
    return (
      <React.Fragment>
      <h1 className="text-center">Expenses</h1>
      <ToggleForms categories={this.props.categories} />

      <Totals expensesList={this.props.expenses} />

      <ExpenseTable expensesList={this.props.expenses} />


      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchExpenses: fetchExpenses,
    fetchCategories: fetchCategories
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
