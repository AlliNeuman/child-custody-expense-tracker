import React, { Component } from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar';

class ExpensesPage extends Component {

  render() {
    return (
      <div className="center-block">
        <SearchBar />
      </div>
    )
  }
}

export default ExpensesPage;
