import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions/categoryActions';
import { fetchExpenses } from '../actions/expenseActions';
import CategoryNew from './CategoryNew';
// import CategoryList from '../components/CategoryList';
// import CategoryToggle from '../components/CategoryToggle';

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
      <div className="pagination-centered btn-group btn-group-toggle" data-toggle="buttons">

      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#new-category" aria-expanded="false" aria-controls="new-category">New Category
      </button>
      </div>

      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="new-category">
            <div className="card card-body">
              <CategoryNew />
            </div>
          </div>
        </div>
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
    fetchExpenses: fetchExpenses,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
