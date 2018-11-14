//React imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Component Imports
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';
import {Home} from './components/Home';

// container imports
import ExpensesPage from './containers/ExpensesPage';
import ExpensePage from './containers/ExpensePage';
import ExpenseNew from './containers/ExpenseNew';

// CSS imports
import './App.css';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={ExpenseNew} />
            <Route exact path="/expenses" component={ExpensesPage} />
              <Route path={'/expenses/:expenseId'} component={ExpensePage} />
            </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
