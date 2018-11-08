import fetch from 'cross-fetch';

const API_URL = "http://localhost:3000"

export function fetchCategories(){
  return (dispatch) => {
    dispatch({type: 'FETCH_CATEGORIES'})
    return fetch(`${API_URL}/categories`)
      .then(response => response.json())
      .then(categories => dispatch({type: "FETCH_CATEGORIES", payload: categories}))
      .catch(error => console.log(error))
  }
}
