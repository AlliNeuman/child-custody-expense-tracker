import React, { Component } from 'react';
import { fetchExpenses } from '../actions/expenseActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseForm from './ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseGridHeader from '../components/ExpenseGridHeader';
import SearchBar from '../components/SearchBar';

class ExpensesPage extends Component {
  constructor(props) {
    super(props);

    this.state = { expenses: []};
  }

  render() {
    return (
      <React.Fragment>
      <SearchBar />
      <ExpenseGridHeader />
      <ExpenseList expenses={this.state.expenses} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchExpenses: fetchExpenses
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
