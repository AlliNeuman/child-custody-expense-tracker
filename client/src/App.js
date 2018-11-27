import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ExpensesPage from './containers/ExpensesPage';
import { fetchCategories } from './actions/categoryActions';
import { fetchExpenses, createExpense } from './actions/expenseActions';
// import ExpensePage from './containers/ExpensePage';
import ExpenseForm from './containers/ExpenseForm';
import {Footer} from './components/Footer';
import {Home} from './components/Home';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchExpenses()
    this.props.fetchCategories()
  }

  render() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/expenses' component={ExpensesPage} />
            <Switch>
            <Route exact path='expenses/new' component={ExpenseForm} />
            </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCategories: fetchCategories,
    fetchExpenses: fetchExpenses,
    createExpense: createExpense
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
