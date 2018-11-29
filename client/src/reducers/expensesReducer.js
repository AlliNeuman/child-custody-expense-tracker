export default (state=[], action) => {

  switch(action.type) {
    case 'LOADING_EXPENSES':
      return state

    case 'FETCH_EXPENSES':
      return action.payload

    case 'FETCH_EXPENSE':
      return action.payload

    case 'ADD_EXPENSE':
      return state.concat(action.payload)

    case 'DELETE_EXPENSE':
    return [action.payload, ...state.filter(shelter=> shelter.id !== action.payload.id)]

    case 'UPDATE_EXPENSE':
      return [...state.filter(expense => expense.id !== action.payload.id), action.payload]
    
    default:
      return state;
  }
}
