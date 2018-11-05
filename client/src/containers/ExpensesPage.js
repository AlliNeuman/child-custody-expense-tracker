import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
// import SearchBar from '../components/SearchBar';
import ExpenseList from '../components/ExpenseList';

//should have import for parent obligation calculation
// should have import for expense paid button

class ExpensesPage extends Component {

  render() {
    return (
      <div>
      <ExpenseList expenses={this.state.expenses} />
      </div>
    )
  }
}

function mapStateToProps(state) {

}

export default ExpensesPage;
