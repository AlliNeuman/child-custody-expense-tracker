import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpenseForm from '../components/ExpenseForm';
import { createExpense } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';


class ExpenseNew extends Component {
  constructor(props) {
    super(props)

    this.handleDayChange = this.handleDayChange.bind(this);

    this.state = {
      selectedDay: undefined,
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
    console.log(this.state)
  }

  handleOnSubmit = event => {
    event.preventDefault();

    let category = this.state.category

    console.log(this.state)
    console.log(category)
    debugger
    
    this.props.createExpense({
      expense: {
        date: this.state.date,
        category: this.state.category,
        description: this.state.description,
        amount: this.state.amount,
        reimburse_percent: this.state.reimburse_percent,
        paid: this.state.paid,
        category_attributes: {
          'name': category
      }
    }});
        console.log(this.state)
        console.log(category)
debugger
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
        [name]: value
    });
  }

  handleDayChange = day => {
    this.setState({ selectedDay: day })
  }

  render() {
    const { categories } = this.props

    return (
      <React.Fragment>
      <div className="container justify-content-left">
      <h3>Add an Expense</h3>
      <ExpenseForm handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}
        handleDayChange={this.handleDayChange}
        categories={categories}
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
    fetchCategories: fetchCategories,
    createExpense: createExpense,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseNew);
