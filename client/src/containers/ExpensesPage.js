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
      const expenseHeaderNames = [
        {th: "Date"},
        {th: "Category"},
        {th: "Description"},
        {th: "Amount"},
        {th: "Reimbursement Percent"},
        {th: "Parent Obligation"},
        {th: "Expense Paid"}
      ];

    return (
      <div className="container">
      <React.Fragment>
      <h1>Expenses</h1>

      <SearchBar />
      <table>
      <tr>
      <ExpenseGridHeader expenseHeaderNames={expenseHeaderNames}/>
      </tr>
      <tr>
      <ExpenseForm />
      </tr>
      <ExpenseList expenses={this.state.expenses} />
      </table>
      </React.Fragment>
      </div>
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
