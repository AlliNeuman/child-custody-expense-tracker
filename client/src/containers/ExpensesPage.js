import React, { Component } from 'react';
import { fetchExpenses } from '../actions/expenseActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseForm from './ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import '../App.css';
// import SearchBar from '../components/SearchBar';


//should have import for parent obligation calculation
// should have import for expense paid button

class ExpensesPage extends Component {

  componentDidMount() {
    this.props.fetchExpenses();
  }

  render() {
    return (
      <div className="ExpensesPage">
        <React.Fragment>
          <ExpenseForm />
          <ExpenseList expenses={this.state.expenses} />
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchExpenses: fetchExpenses
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
