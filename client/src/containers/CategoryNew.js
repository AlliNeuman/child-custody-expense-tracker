import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import CategoryForm from '../components/CategoryForm';
import { createCategory } from '../actions/categoryActions'


class CategoryNew extends Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)

    this.state = {
      name: ''
    }


  }

  handleOnSubmit = event => {
    event.preventDefault();

    this.props.createCategory({
      category: {
        name: this.state.name,
    }});
    this.refs.categoryInput.value = '';
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
      <h3>Add a Category</h3>
      <form id="category-form" onSubmit={this.handleOnSubmit} className="float-left">

        <div className="form-group form-row">
          <div className="col-sm">
          <input
          className="form-control input-sm"
          ref="categoryInput"
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.handleOnChange}
          />
          </div>
        </div>

        <input
        className="input-sm btn btn-primary"
        type="submit"
         />
      </form>
    </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createCategory: createCategory,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNew);
