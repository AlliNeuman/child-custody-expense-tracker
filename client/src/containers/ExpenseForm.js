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
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createExpense(this.state)
    this.props.history.push('/expenses')
  }

  render() {
    const { selectedDay } = this.state;

    return (
      <div className="expense-form">
      <h4>Add an Expense</h4>
      <form onSubmit={this.handleOnSubmit}>
        <FormGroup className="row">

        <div>
          {selectedDay}
          <DayPickerInput onDayChange={this.handleDayChange} />
        </div>

        <FormControl
          type=""
          name="category"
          value={this.state.date}
          onChange={this.handleOnChange}
        />
        




    )
  }
}

export default ExpenseForm;
