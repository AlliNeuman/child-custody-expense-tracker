import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createExpense } from '../actions/expenseActions';
import ExpenseForm from '../components/ExpenseForm';
import { fetchCategories } from '../actions/categoryActions';

class ExpenseNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: undefined,
      category: '',
      description: '',
      amount: '',
      reimbursement: '',
      paid: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createExpense, history } = this.props
    let category = this.state.category
    createExpense({ expense: {
      date: this.state.selectedDay,
      description: this.state.description,
      amount: this.state.amount,
      reimburse_percent: this.state.reimbursement,
      paid: this.state.paid,
      category_attributes: { 'name': category}
    }});
    // history.push('/expenses');
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container justify-content-left">
        <h3>Add a New Expense</h3>
        <ExpenseForm handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createExpense: createExpense,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseNew);
