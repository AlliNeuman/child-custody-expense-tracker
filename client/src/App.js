import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ExpensesPage from './containers/ExpensesPage';
import ExpensePage from './containers/ExpensePage';
import { Welcome } from './components/Welcome';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <div className="container">
            <Route exact path="/" component={Welcome} />
            <Route exact path="/expenses" component={ExpensesPage} />
            <Route exact path="/expenses/:id" component={ExpensePage} />
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
