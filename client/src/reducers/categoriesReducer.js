export default (state=[], action) => {

  switch(action.type) {

    case 'LOADING_CATEGORIES':
      return state

    case 'FETCH_CATEGORIES':
      return action.categories

    case 'FETCH_CATEGORY':
      return action.category

    case 'ADD_CATEGORY':
      return state.concat(action.category);

    default:
      return state;
  }
}
