import fetch from 'cross-fetch';

export function fetchExpenses() {
  return (dispatch) => {
    dispatch({type: 'LOADING_EXPENSES'})
    return fetch('http://localhost:3000/expenses')
    .then(response => response.json())
    .then(expenses => dispatch({
      type: "FETCH_EXPENSES",
      payload: expenses}))
    .catch(error => console.error(error))
  }
}

export function createExpense(formContent) {
  return (dispatch) => {
    dispatch({ type: 'ADD_EXPENSE'})
    return fetch('http://localhost:3000/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formContent)})
      .then(response => response.json())
      .then(expenses => dispatch({
        type: "UPDATE_EXPENSE",
        payload: expenses}))
      .catch(error => console.error(error))
  }
}
