import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions/categoryActions';
import { createExpense } from '../actions/expenseActions';
import {createExpense} from '../actions/expenseActions';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import CategoryInput from '../components/CategoryInput';
import CategorySearch from '../components/CategorySearch';
import 'react-day-picker/lib/style.css';

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

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createExpense, history } = this.props
    const { dateInput, categoryInput, descriptionInput, amountInput, reimbursementInput, paidInput} = this.refs

    createExpense(this.state);

    dateInput.value = '';
    categoryInput.value = '';
    descriptionInput.value = '';
    amountInput.value = '';
    reimbursementInput.value = '';
    paidInput.value = '';

    history.push('/expenses');
  }

  render() {


    return (
      <div className="container">
        <h3>Add a New Expense</h3>
          <div className="row justify-content-left">

          <form id="expense-form" onSubmit={this.handleOnSubmit.bind(this)}>

            <div className="col-sm">
            <DayPickerInput
              ref="dateInput"
              name="selectedDay"
              value={this.state.selectedDay}
              OnChange={this.handleOnChange}
              />
            </div>

            <div className="col-sm">
            <select
            ref="categoryInput"
            placeholder="Select"
            name="category"
            value={this.state.category}
            onChange={this.handleOnChange}
            >
            <CategorySearch />
            </select>
            </div>

            <div className="col-sm">
              <input
              ref="descriptionInput"
              type="text"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleOnChange}
              />
            </div>

            <div className="col-sm">
              <input
              ref="amountInput"
              type="text"
              placeholder="Amount"
              name="amount"
              value={this.state.amount}
              onChange={this.handleOnChange}
              />
            </div>

            <div className="col-sm">
            <input
            ref="reimbursementInput"
            type="text"
            placeholder="Reimburse Rate"
            name="reimbursement"
            value={this.state.reimbursement}
            onChange={this.handleOnChange}
            />
            </div>

            <div className="col-sm">
            <input
            ref="paidInput"
            type="text"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.handleOnChange}
            />
            </div>

            <div className="col-sm">
            <select
            ref="paidInput"
            placeholder="select"
            name="paid"
            value={this.state.paid}
            onChange={this.handleOnChange}
            >
            <option value="select">Select</option>
            <option value="true">Paid</option>
            <option value="false">Not Paid</option>
            </select>
            </div>

        <input type="submit" value="Add Expense" className="btn btn-primary" />
      </form>
      </div>
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
    fetchCategories: fetchCategories
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseNew);
