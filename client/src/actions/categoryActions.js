import fetch from 'cross-fetch';

export function fetchCategories() {
  debugger
  return (dispatch) => {
    dispatch({type: 'LOADING_CATEGORIES'})
    return fetch('http://localhost:3001/categories')
    .then(response => response.json())
    .then(categories => dispatch({
      type: "FETCH_CATEGORIES",
      payload: categories}))
    .catch(error => console.error(error))
  }
}
