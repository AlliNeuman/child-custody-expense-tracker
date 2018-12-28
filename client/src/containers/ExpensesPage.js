import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExpenses } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';
// import CategoryNew from './CategoryNew';
// import ExpenseNew from './ExpenseNew';
import ExpenseTable from '../components/ExpenseTable';
import ToggleForms from '../components/ToggleForms';
import Totals from '../components/Totals';
import {NoData} from '../components/NoData';

class ExpensesPage extends Component {

  componentDidMount = () => {
    this.props.fetchExpenses();
    this.props.fetchCategories();
  }

  updateOutstandingTotal = (total, num) => {
    return parseFloat(parseFloat(total) + parseFloat(num)).toFixed(2)
  }

  calculateTotal = (expense) => {
    return parseFloat(expense.amount * expense.reimburse_percent).toFixed(2)
  }

  render() {
// debugger
  let expenses = this.props.expenses.length >= 1 ? (this.props.expenses.filter(exp => exp.paid === false).map(exp => this.calculateTotal(exp))) : []

  let currentTotal = expenses.length >= 1 ? (expenses.reduce(this.updateOutstandingTotal)) : 0

  let hasData = (this.props.expenses.count > 0)
    return (

      hasData ? (
        <React.Fragment>
        <h1 className="text-center">Expenses</h1>
        <ToggleForms categories={this.props.categories} />
        <Totals outstandingTotal={currentTotal} />
        <ExpenseTable expensesList={this.props.expenses} />
        </React.Fragment>
      ) : (
        <React.Fragment>
        <NoData />
        <ToggleForms categories={this.props.categories} />
        </React.Fragment>
      )

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
