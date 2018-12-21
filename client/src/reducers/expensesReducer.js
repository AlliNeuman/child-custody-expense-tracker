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
      return Object.assign({}, state, action.payload)

    case 'ADD_EXPENSE':
      return [...state, action.payload]
      // Object.assign({}, state, action.payload);

    case 'DELETE_EXPENSE':
    return [action.payload, ...state.filter(expense => expense.id !== action.payload.id)]

    case 'UPDATE_EXPENSE':
      // const idx = state.expenses.indexOf(state.expenses.find(expense => expense.id === action.payload.id));
      // let new_expenses = JSON.parse(JSON.stringify(state.expenses));
      // new_expenses[idx] = action.payload;
      // return {...state, expenses: new_expenses}
      let s = [ ...state ]
      let idx = s.map(expense => expense.id).indexOf(action.payload.id)
      s[idx] = action.payload
      s = s.sort(function(a,b) {return a.date - b.date})
// debugger
      return s;


    default:
      return state;
  }
}
