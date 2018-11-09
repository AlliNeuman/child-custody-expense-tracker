import fetch from 'cross-fetch';
import { API_URL } from './APIurl';

const setCategories = categories => {
  return {
    type: 'FETCH_CATEGORIES',
    categories
  }
}

const setCategory = category => {
  return {
    type: 'FETCH_CATEGORY',
    category
  }
}

const addCategory = category => {
  return {
    type: 'ADD_CATEGORY',
    category
  }
}

export const fetchCategories = () => {
  return dispatch => {
    dispatch({type: 'LOADING_CATEGORIES'});
      return fetch(`${API_URL}/categories`)
      .then(response => response.json())
      .then(categories => dispatch(setCategories(categories)))
      .catch(error => console.error(error))
  }
}

export const fetchCategory = categoryId => {
  return dispatch => {
    return fetch(`${API_URL}/categories/${categoryId}`)
    .then(response => response.json())
    .then(category => {dispatch(setCategory([category]));
    })
    .catch(error => console.error(error))
  }
}

export const createCategory = (category) => {
  return dispatch => {
    return fetch(`${API_URL}/categories`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({category: category})
    })
    .then(response => response.json())
    .then(category => {
      dispatch(addCategory(category))
    })
    .catch(error => {
      dispatch({type: 'error'})
    })
  }
}
