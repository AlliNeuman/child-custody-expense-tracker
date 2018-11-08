import fetch from 'cross-fetch';
import { API_URL } from './APIurl';

export function fetchExpenses() {
  return (dispatch) => {
    dispatch({ type: "LOADING_EXPENSES"});

    const expensesUrl = `${API_URL}/expenses`

    return fetch(expensesUrl, {method: 'get'})
      .then(response => response.json())
      .then(expenses => dispatch({
        type: 'FETCH_EXPENSES',
        payload: expenses
      }));
  };
}


export function fetchExpense(expense){
  return (dispatch) => {
    dispatch({ type: "LOADING_EXPENSE" });

    const expenseUrl = `${API_URL}/expenses/${expense.expenseId}`

    return fetch(expenseUrl, {method: 'get'})
      .then(response => response.json())
      .then(expense => {dispatch({
        type: 'LOADING_EXPENSE',
        payload: expense
      })});
  };
}
