import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions/categoryActions';
import { fetchExpenses } from '../actions/expenseActions';
import ToggleCategoriesPage from '../components/ToggleCategoriesPage';
// import CategoryNew from './CategoryNew';
// import CategoryList from '../components/CategoryList';

class CategoriesPage extends Component {

  componentDidMount = () => {
    this.props.fetchCategories();
    this.props.fetchExpenses();
  }

  render() {
    // debugger
    return (
      <React.Fragment>
      <h1 className="text-center">Categories</h1>
      <ToggleCategoriesPage categories={this.props.categories}/>

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
    fetchExpenses: fetchExpenses,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
