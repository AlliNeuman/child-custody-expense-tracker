import { combineReducers } from  'redux';
import expensesReducer from './expensesReducer';
import categoriesReducer from './categoriesReducer';


export default combineReducers({
  expenses: expensesReducer,
  categories: categoriesReducer,
})
