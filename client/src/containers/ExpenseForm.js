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
      <div className="expenseForm">

      <form id="expense-form" onSubmit={this.handleOnSubmit.bind(this)}>

        <tr>
          <td>
            {selectedDay}
            <DayPickerInput
            ref="dateInput"
            id="dateInput"
            name="date"
            placeholder="select day"
            onDayChange={this.handleDayChange} />
          </td>

          <td>
          <input
            ref="categoryInput"
            type="text"
            name="category"
            width="103"
            placeholder="Category"
            value={this.state.category}
            onChange={this.handleOnChange}
            />
            </td>

            <td>
          <input
            ref="descriptionInput"
            id="descriptionInput"
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleOnChange}
            />
            </td>

            <td>
          <input
            ref="amountInput"
            id="amountInput"
            type="number"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleOnChange}
            />
            </td>

            <td>
          <input
            ref="reimburseInput"
            id="reimburseInput"
            type="number"
            name="reimbursement"
            placeholder="Reimbursement Percent"
            value={this.state.description}
            onChange={this.handleOnChange}
            />
            </td>
            </tr>
      </form>
  </div>
    )
  }
}

export default ExpenseForm;
