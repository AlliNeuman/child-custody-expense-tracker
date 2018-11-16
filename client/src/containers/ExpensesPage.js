import React, { Component } from 'react';
import { fetchExpenses } from '../actions/expenseActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseGridHeader from '../components/ExpenseGridHeader';
import ExpenseNew from './ExpenseNew';
import SearchBar from '../components/SearchBar';
import ExpenseList from '../components/ExpenseList';

class ExpensesPage extends Component {

  componentDidMount() {
    this.props.fetchExpenses();
  }

  render() {

    return (
      <div className="ExpensesPage">
      <React.Fragment>
      <h1>Expenses</h1>
      <h3>Add an Expense</h3>
      <ExpenseNew />
      <SearchBar />
      <ExpenseGridHeader />
      <ExpenseList expenses={this.state.expenses} />
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
    fetchExpenses: fetchExpenses
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
