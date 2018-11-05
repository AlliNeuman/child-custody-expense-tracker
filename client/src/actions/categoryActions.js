import fetch from 'cross-fetch';

export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATEGORIES'});
    return fetch('http://localhost:3000/categories')
      .then(respnse => response.json())
      .then(categories => {dispatch({ type: 'FETCH_CATEGORIES', categories: categories })});
  }
}
