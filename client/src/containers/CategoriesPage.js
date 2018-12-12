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
      <h1>Categories</h1>
      <CategoryNew />
      <CategoryList categoriesList={this.props.categories}/>

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
