import { API_URL } from './APIurl';
import fetch from 'cross-fetch';

export function fetchCategories() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATEGORIES'});
    return fetch('http://localhost:3001/posts')
    .then(response => response.json())
    .then(categories => {dispatch({
      type: "FETCH_CATEGORIES",
      categories: categories})});
  }
}
