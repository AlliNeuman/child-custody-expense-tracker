import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseForm from '../components/ExpenseForm';
import { createExpense } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';

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
    }


  }

  componentDidMount = () => {
    this.props.fetchCategories();
  }

  handleOnSubmit = event => {
    event.preventDefault();
    //
    // console.log(this.state)
    // console.log(this.state.category)
    // debugger

    this.props.createExpense({
      expense: {
        date: this.state.date,
        category_id: this.state.category,
        description: this.state.description,
        amount: this.state.amount,
        reimburse_percent: this.state.reimburse_percent,
        paid: this.state.paid,

    }});
    // console.log(this.state.category)

// debugger
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
        [name]: value
    });
  }

  render() {

    return (
      <React.Fragment>
      <div className="container justify-content-left">
      <h3>Add an Expense</h3>
      <ExpenseForm handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}
        categories={this.props.categories}
      />
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
