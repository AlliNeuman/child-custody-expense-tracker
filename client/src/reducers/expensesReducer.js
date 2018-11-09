export default (state=[], action) => {
  switch(action.type) {
    case 'LOADING_EXPENSES':
      return state

    case 'FETCH_EXPENSES':
      return action.expenses

    case 'FETCH_EXPENSE':
      return action.expense

    case 'ADD_EXPENSE':
      return state.concat(action.expense);

    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id)

    case 'UPDATE_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.expense.id) {
          return action.expense
        } else {
          return expense
        }
      });

    default:
      return state;
  }
}
