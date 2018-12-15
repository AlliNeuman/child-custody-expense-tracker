export default (state=[], action) => {

  switch(action.type) {
    case 'LOADING_EXPENSES':
      return state

    case 'LOADING_EXPENSE':
      return state

    case 'FETCH_EXPENSES':
    console.log(action.payload)
      return action.payload

    case 'FETCH_EXPENSE':
      return action.payload

    case 'ADD_EXPENSE':
      return Object.assign({}, state, action.payload);

    case 'DELETE_EXPENSE':
    return [action.payload, ...state.filter(expense => expense.id !== action.payload.id)]

    case 'UPDATE_EXPENSE':
      return [...state.filter(expense => expense.id !== action.payload.id), action.payload];

    default:
      return state;
  }
}
