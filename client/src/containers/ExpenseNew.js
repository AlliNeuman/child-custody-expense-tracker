import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createExpense } from '../actions/expenseActions';
import ExpenseForm from '../components/ExpenseForm';
// import { fetchCategories } from '../actions/categoryActions';
// import CategoryInput from '../components/CategoryInput';
// import CategorySearch from '../components/CategorySearch';


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
