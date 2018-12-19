import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions/categoryActions';
import CategoryNew from './CategoryNew';
import CategoryList from '../components/CategoryList';

class CategoriesPage extends Component {

  componentDidMount = () => {
    this.props.fetchCategories();
  }

  render() {
    return (
      <React.Fragment>
      <h1 className="text-center">Categories</h1>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">

      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#new-category" aria-expanded="false" aria-controls="new-category">New Category
      </button>

      <div className="col">
        <div className="collapse multi-collapse" id="new-category">
          <div className="card card-body">
            <CategoryNew />
          </div>
        </div>
      </div>

      <CategoryList categoriesList={this.props.categories}/>

      </div>
      </React.Fragment>
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
    fetchCategories: fetchCategories
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
