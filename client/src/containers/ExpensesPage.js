import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExpenses } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';
import ExpenseGridHeader from '../components/ExpenseGridHeader';
import ExpenseForm from './ExpenseForm';
import SearchBar from '../components/SearchBar';
import ExpenseList from '../components/ExpenseList';

class ExpensesPage extends Component {

  componentDidMount = () => {
    this.props.fetchExpenses();
  }


  render() {

    return (
      <div className="ExpensesPage">
      <React.Fragment>
      <h1>Expenses</h1>
      <ExpenseForm createExpense={this.props.createExpense} />
      <SearchBar />
      <ExpenseGridHeader />
      <ExpenseList expenses={this.props.expenses} />
      </React.Fragment>
      </div>
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
