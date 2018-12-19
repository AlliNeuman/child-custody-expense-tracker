import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExpenses } from '../actions/expenseActions';
import { fetchCategories } from '../actions/categoryActions';
// import ExpenseGridHeader from '../components/ExpenseGridHeader';
// import ExpenseNew from './ExpenseNew';
import CategoryNew from './CategoryNew'
;import ExpenseNew from './ExpenseNew';
import ExpenseTable from '../components/ExpenseTable';
import Totals from '../components/Totals';

class ExpensesPage extends Component {

  componentDidMount = () => {
    this.props.fetchExpenses();
    this.props.fetchCategories();
  }

  render() {
// debugger
    return (
      <React.Fragment>
      <h1 className="text-center">Expenses</h1>

      <div className="pagination-centered btn-group btn-group-toggle" data-toggle="buttons">
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="new-expense new-category">All Forms</button>
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#new-expense" aria-expanded="false" aria-controls="new-expense">New Expense</button>
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#new-category" aria-expanded="false" aria-controls="new-category">New Category</button>

      </div>

      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="new-expense">
            <div className="card card-body">
              <ExpenseNew categories={this.props.categories}/>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="collapse multi-collapse" id="new-category">
            <div className="card card-body">
              <CategoryNew />
            </div>
          </div>
        </div>
      </div>

      <Totals expensesList={this.props.expenses} />

      <ExpenseTable expensesList={this.props.expenses} />


      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchExpenses: fetchExpenses,
    fetchCategories: fetchCategories
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
