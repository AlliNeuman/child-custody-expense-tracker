import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createExpense } from '../actions/expenseActions';

class ExpenseForm extends Component {
  constructor(){
    super();



    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      reimburse: '',
      paid: ''
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
    this.props.createExpense(this.state);
    this.props.history.push('/expenses')
  }

  render() {

    return (
      <div className="expenseForm">

      <form id="expense-form" onSubmit={this.handleOnSubmit}>
              <td>
              <input
                ref="dateInput"
                type="text"
                name="date"
                placeholder="Enter Date: YYYMMDD"
                value={this.state.date}
                onChange={this.handleOnChange} />
              </td>

              <td>
                <input
                ref="categoryInput"
                type="text"
                name="category"
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
                type="text"
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
                type="text"
                name="reimbursement"
                placeholder="Reimbursement Percent"
                value={this.state.description}
                onChange={this.handleOnChange}
                />
              </td>
      </form>
    </div>
    )
  }
}

export default ExpenseForm;
