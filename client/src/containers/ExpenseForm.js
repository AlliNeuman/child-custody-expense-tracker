import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createExpense } from '../actions/expenseActions';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class ExpenseForm extends Component {
  constructor(props){
    super(props);

    this.handleDayChange = this.handleDayChange.bind(this);

    this.state = {
      selectedDay: undefined,
      category: '',
      description: '',
      amount: '',
      reimburse: '',
      paid: ''
    };
  }

  handleDayChange = day => {
    this.setState({
      selectedDay: day
    });
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createExpense(this.state);
    this.props.history.push('/expenses')
  }

  render() {
    const { selectedDay } = this.state;

    return (
      <div className="container">
      <h4>Add an Expense</h4>

      <form id="expense-form" onSubmit={this.handleOnSubmit.bind(this)}>

        <div className="row">
//Date => Date picker pop out
          <div>
            {selectedDay}
            <DayPickerInput
            ref="dateInput"
            name="date"
            placeholder="select day"
            onDayChange={this.handleDayChange} />
          </div>
//Category => need to have a fetch req
          <input
            ref="categoryInput"
            type="text"
            name="category"
            placeholder="Category"
            value={this.state.category}
            onChange={this.handleOnChange}
            />
//Description
          <input
            ref="descriptionInput"
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleOnChange}
            />
//Amount => float
          <input
            ref="amountInput"
            type="text"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleOnChange}
            />

//Reimburse => float #
          <input
            ref="reimburseInput"
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleOnChange}
            />

//Paid => boolean => should I render button?
        </div>
      </form>
  </div>
    )
  }
}

export default ExpenseForm;
