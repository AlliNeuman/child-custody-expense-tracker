import fetch from 'cross-fetch';
import { API_URL } from './APIurl';

const setExpenses = expenses => {
  return {
    type: 'FETCH_EXPENSES',
    expenses
  }
}

const setExpense = expense => {
  return {
    type: 'FETCH_EXPENSE',
    expense
  }
}

const addExpense = expense => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
}

const updateExpense = expense => {
  return {
    type: 'UPDATE_EXPENSE',
    expense
  }
}

const removeExpense = expense => {
  return {
    type: 'DELETE_EXPENSE',
    expense
  }
}

export const fetchExpenses = () => {
  return dispatch => {
    dispatch({type: 'LOADING_EXPENSES'});
    return fetch(`${API_URL}/expenses`)
    .then(response => response.json())
    .then(expenses => dispatch(setExpenses(expenses)))
    .catch(error => console.error(error))
  }
}

export const fetchExpense = (expense) => {
  const expenseId = expense.id
  return dispatch => {
    return fetch(`${API_URL}/expenses/${expenseId}`)
    .then(response => response.json())
    .then(expense => {
      dispatch(setExpense([expense]));
    })
    .catch(error => console.error(error))
  }
}

export const createExpense = (expense) => {
  return dispatch => {
    return fetch(`${API_URL}/expenses`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({expense: expense})
    })
    .then(response => response.json())
    .then(expense => {
      dispatch(addExpense(expense))
    })
    .catch(error => {
      dispatch({type: 'error'})
    })
  }
}

export const deleteExpense = (expense, routerHistory) => {
  const expenseId = expense.id
  return dispatch => {
    return fetch(`${API_URL}/expenses/${expenseId}`, {
      method: "DELETE",
    })
    .then(response => {
      dispatch(removeExpense(expenseId));
      routerHistory.replace('/expenses')
    })
    .catch(error => console.error(error))
  }
}
