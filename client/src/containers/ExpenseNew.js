import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchCategories} from '../actions/categoryActions';
import {createExpense} from '../actions/expenseActions';
import { Form, Button, FormControl } from 'react-bootstrap';

class ExpenseNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: undefined,
      categories: [],
      category: '',
      description: '',
      amount: '',
      reimburse: '',
      paid: '',
    };
  }

  componentDidMount = (props) => {
    this.props.fetchCategories()
    debugger
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createExpense, history } = this.props
    const { date, category, description, amount, reimburse, paid} = this.refs

    createExpense(this.state);
    date.value = '';
    category.value = '';
    description.value = '';
    amount.value = '';
    reimburse.value = '';
    paid.value = '';
    history.push('/expenses');
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }

  render() {
    let categories = this.props.state.categories;
    let optionCategories = categories.map((category) => <option key={category.name} value ={category.name}>{category.name}</option>);

    return (
      <div>
      <h3>Add a New Expense</h3>
      <Form onSubmit={this.handleSubmit}>
      <DayPickerInput
        name="selectedDay"
        value={this.state.selectedDay}
        handleOnChange={this.handleOnChange} />

      <FormControl
      componentClass="select"
      placeholder="select"
      name="category"
      value={this.state.category}
      onChange={this.handleOnChange}
      >{optionCategories}</FormControl>

      <Button></Button>
      </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createExpense: createExpense,
    fetchCategories: fetchCategories,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseNew);
