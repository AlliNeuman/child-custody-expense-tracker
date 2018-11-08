import fetch from 'cross-fetch';
import { API_URL } from './APIurl';

export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: "LOADING_CATEGORIES"});

    const categoriesUrl = `${API_URL}/categories`

    return fetch(categoriesUrl, {method: 'get'})
      .then(response => response.json())
      .then(categories => dispatch({
        type: 'FETCH_CATEGORIES',
        payload: categories
      }));
  };
}


export function fetchCategory(category){
  return (dispatch) => {
    dispatch({ type: "LOADING_CATEGORY" });

    const categoryUrl = `${API_URL}/categories/${category.categoryId}`

    return fetch(categoryUrl, {method: 'get'})
      .then(response => response.json())
      .then(category => {dispatch({
        type: 'LOADING_CATEGORY',
        payload: category
      })});
  };
}
