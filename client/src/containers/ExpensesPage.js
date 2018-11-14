import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

      <React.Fragment>
      <h1>Expenses</h1>
      <h3>Add an Expense</h3>

      <SearchBar />
      <ExpenseGridHeader expenseHeaderNames={expenseHeaderNames}/>

      <ExpenseList expenses={this.state.expenses} />

      </React.Fragment>

    )
  }
}

export default ExpensesPage;
