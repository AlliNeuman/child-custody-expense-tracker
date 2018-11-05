import React, { Component } from 'react';
import ExpensePaid from './ExpensePaid';
import '../App.css';

const Expense = ({ expense }) => {
  return (
    <tr>
    <td>{expense.date}</td>
    <td>{expense.category}</td>
    <td>{expense.description}</td>
    <td>{expense.amount}</td>
    <td>{expense.reimbursePercent}</td>
    <td></td>
    <td></td>
    <td><ExpensePaid /></td>
    </tr>
  )
}
