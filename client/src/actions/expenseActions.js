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
      body: JSON.stringify(formContent),
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      })
      .then(response => {
        switch (response.status) {
          case 404: dispatch({ type: "UPDATE_EXPENSE_ERROR", payload: response}); break;
          case 422: dispatch({ type: "CREATE_EXPENSE_ERROR", payload: response}); break;
        )
        if (response.ok) {
          return resonse.json()
        })
      .then(data => {
        if (data) {
          dispatch({ type: "UPDATE_EXPENSE", payload: data }))
      .catch(error => console.error(error))
  }
}
