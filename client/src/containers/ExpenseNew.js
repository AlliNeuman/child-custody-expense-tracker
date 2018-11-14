import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createExpense} from '../actions/expenseActions';
import ExpenseForm from '../components/ExpenseForm';

class ExpenseNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      reimburse: '',
      obligation: '',
      paid: '',
    };
  }


}
