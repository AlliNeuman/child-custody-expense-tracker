import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createExpense } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';
import {Form, Button} from 'react-bootstrap';

class ExpenseNew extends Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)

    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      reimburse_percent: '',
      paid: '',
      formErrors: {
        date: '',
        category: '',
        description: '',
        amount: '',
        reimburse_percent: '',
        paid: ''},
        formValid: false
    }
  }

  componentDidMount = () => {
    this.props.fetchCategories();
  }

  handleOnSubmit = event => {
    event.preventDefault();

    this.props.createExpense({
      expense: {
        date: this.state.date,
        category_id: this.state.category,
        description: this.state.description,
        amount: this.state.amount,
        reimburse_percent: this.state.reimburse_percent,
        paid: this.state.paid,

    }});
    this.refs.dateInput.value = '';
    this.refs.categoryInput.value = 'Select Category';
    this.refs.descriptionInput.value = '';
    this.refs.amountInput.value = '';
    this.refs.reimburseInput.value = '';
    this.refs.paidInput.value = 'Select Paid';


// debugger
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
        [name]: value
    });
  }

  render() {
    const categoryOptions = this.props.categories.map((category) => {
      return (
        <option key={category.id} value={category.id} id={category.id}>{category.name}</option>
      )
    })

    return (
      <React.Fragment>
      <div className="container justify-content-left">
      <h3>Add an Expense</h3>
        <Form id="expense-form" onSubmit={this.handleOnSubmit} className="float-left">

        <div className="form-group form-row">
        <div className="col-sm">
        <input
        required
        className="form-control input-sm"
        type="date"
        ref="dateInput"
        placeholder="Date"
        name="date"
        onChange={this.handleOnChange}
        />
        </div>
        </div>

        <div className="form-group form-row">
        <div className="col-sm">
        <select
        required
        className="form-control input-sm"
        ref="categoryInput"
        placeholder="Select"
        name="category"
        onChange={this.handleOnChange}
        >
        <option selected disabled hidden >Select Category</option>
        {categoryOptions}
        </select>
        </div>
        </div>
        <p className="text-muted small">Don't see what you're looking for? Create a new category.</p>



        <div className="form-group form-row">
        <div className="col-sm">
        <input
        required
        className="form-control input-sm"
        type="text"
        ref="descriptionInput"
        placeholder="Description"
        name="description"
        onChange={this.handleOnChange}
        />
        </div>
        </div>

        <div className="form-group form-row">
        <div className="col-sm">
        <input
        required
        className="form-control input-sm"
        type="text"
        ref="amountInput"
        placeholder="Amount"
        name="amount"
        onChange={this.handleOnChange}
        />
        </div>
        </div>

        <div className="form-group form-row">
        <div className="col-sm">
        <input
        required
        className="form-control input-sm"
        type="text"
        ref="reimburseInput"
        placeholder="Reimbursement Rate"
        name="reimburse_percent"
        onChange={this.handleOnChange}
        />
        </div>
        </div>

        <div className="form-group form-row">
        <div className="col-sm">
        <select
        required
        className="form-control input-sm"
        placeholder="Select"
        ref="paidInput"
        name="paid"
        onChange={this.handleOnChange}
        >
        <option hidden selected disabled>Select Paid</option>
        <option value="true">Paid</option>
        <option value="false">Not Paid</option>
        </select>
        </div>
        </div>

        <Button
        className="input-sm btn btn-primary"
        type="submit"
        >
        Submit
        </Button>
        </Form>

    </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createExpense: createExpense,
    fetchCategories: fetchCategories,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseNew);
