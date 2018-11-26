export default (state=[], action) => {
  switch(action.type) {
    case 'LOADING_EXPENSES':
      return state

    case 'FETCH_EXPENSES':
      return [...action.payload]

    case 'FETCH_EXPENSE':
      return [...state, action.payload]

    case 'ADD_EXPENSE':
      return [...state, action.payload];

    case 'DELETE_EXPENSE':
      return [action.payload, ...state.filter(expense => expense.id !== action.payload.id)]

    case 'UPDATE_EXPENSE':
      return state.map((expense) => {
debugger
        if (expense.id !== action.payload.id) {
          return expense
        }
        return {
          ...expense,
          ...action.expense
        }
      });

    default:
      return state;
  }
}
