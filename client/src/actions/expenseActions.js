import fetch from 'cross-fetch';

export function fetchExpenses() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EXPENSES'});
    return fetch('http://localhost:3000/expenses')
      .then(response => response.json())
      .then(expenses => {dispatch({ type: 'FETCH_EXPENSES', expenses: expenses })});
  }
}

export function fetchExpense(expense) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EXPENSE'});
    return fetch(`http://localhost:3000/expenses/${expense.expenseId}`)
      .then(response => response.json())
      .then(expense => {dispatch({ type: 'FETCH_EXPENSE', expense: expense })});
  }
}
