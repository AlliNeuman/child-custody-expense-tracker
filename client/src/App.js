import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ExpensesPage from './containers/ExpensesPage';
// import ExpensePage from './containers/ExpensePage';
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
            <Route exact path="/" component={Home} />
            <Route exact path="/expenses" component={ExpensesPage} />
            <Switch>
            <Route exact path={'/expenses/new'} component={ExpenseNew} />
            </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
