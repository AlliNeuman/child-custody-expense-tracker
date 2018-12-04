import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExpenses } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';
import ExpenseGridHeader from '../components/ExpenseGridHeader';
// import ExpenseNew from './ExpenseNew';
import ExpenseNew from './ExpenseNew';
import SearchBar from '../components/SearchBar';
import ExpenseList from '../components/ExpenseList';

class ExpensesPage extends Component {

  componentDidMount = () => {
    this.props.fetchExpenses();
    this.props.fetchCategories();
  }


  render() {
    // debugger
    return (
      <React.Fragment>
      <h1>Expenses</h1>
      <ExpenseNew categories={this.props.categories}/>
      <ExpenseGridHeader />

      <ExpenseList expensesList={this.props.expenses} />

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
