import { combineReducers } from  'redux';
import expensesReducer from './expensesReducer';
import categoriesReducer from './categoriesReducer';


export const rootReducer = combineReducers({
  expenses: expensesReducer,
  categories: categoriesReducer
})
