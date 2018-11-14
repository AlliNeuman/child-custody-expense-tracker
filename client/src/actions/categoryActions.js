import { API_URL } from './APIurl';

export function fetchCategories() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATEGORIES'})
    return fetch(`${API_URL}/categories`)
    .then(response => response.json())
    .then(categories => dispatch({
      type: "FETCH_CATEGORIES",
      payload: categories}))
    .catch(error => console.error(error))
  }
}
