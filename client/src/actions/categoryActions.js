export function fetchCategories() {
  // debugger
  return (dispatch) => {
    dispatch({type: 'LOADING_CATEGORIES'})
    return fetch('http://localhost:3000/categories')
    .then(response => response.json())
    .then(categories => dispatch({
      type: "FETCH_CATEGORIES",
      payload: categories}))
    .catch(error => console.error(error))
  }
}

export function createCategory(formContent) {
  console.log(formContent)
  return (dispatch) => {
    dispatch({ type: 'CREATING_CATEGORY'})
    return fetch('http://localhost:3000/categories', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formContent)})
      .then(response => response.json())
      .then(categories => dispatch({
        type: "ADD_CATEGORY",
        payload: categories}))
      .catch(error => console.error(error))
  }
}
