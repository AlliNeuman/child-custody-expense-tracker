import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ExpensesPage from './containers/ExpensesPage';
import CategoryNew from './containers/CategoryNew';
import ExpenseNew from './containers/ExpenseNew';
import {Footer} from './components/Footer';
import {Home} from './components/Home';


class App extends Component {

  render() {


    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/expenses' component={ExpensesPage} />
            <Route exact path='expenses/new' component={ExpenseNew} />
            <Route exact path='/categories/new' component={CategoryNew} />
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default (App);
