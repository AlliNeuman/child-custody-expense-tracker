import fetch from 'cross-fetch';

export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATEGORIES'});
    return fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(categories => {dispatch({ type: 'FETCH_CATEGORIES', categories: categories })});
  }
}

export function fetchCategory(category) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/expenses/${expense.expenseId}`)
      .then(response => response.json())
      .then(post => {dispatch({ type: 'FETCH_CATEGORY', category: category })});
  }
}
