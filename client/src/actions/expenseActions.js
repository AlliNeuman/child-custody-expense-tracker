export function fetchExpenses() {
  return (dispatch) => {
    // debugger
    dispatch({type: 'LOADING_EXPENSES'})
    return fetch('http://localhost:3000/expenses')
    .then(response => response.json())
    .then(expenses => dispatch({
      type: "FETCH_EXPENSES",
      payload: expenses}))
    .catch(error => console.error(error))
  }
}

export function fetchExpense(expense) {
  return (dispatch) => {
    dispatch({type: 'LOADING_EXPENSE'})
    return fetch(`http://localhost:3000/expenses/${expense.id}`)
    .then(response => response.json())
    .then(expense => dispatch({
      type: "FETCH_EXPENSE",
      payload: expense}))
    .catch(error => console.error(error))
  }
}

export function createExpense(formContent) {
  console.log(formContent)
  return (dispatch) => {
    dispatch({ type: 'CREATING_EXPENSE'})
    return fetch('http://localhost:3000/expenses', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formContent)})
      .then(response => response.json())
      .then(expenses => dispatch({
        type: "ADD_EXPENSE",
        payload: expenses}))
      .catch(error => console.error(error))
  }
}

export function updateExpense(expense) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/expenses/${expense.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(expense)})
      .then(response => response.json())
      .then(expense => dispatch({
        type: "UPDATE_EXPENSE",
        payload: expense
      }))
      .catch(error => console.error(error))
  }
}
