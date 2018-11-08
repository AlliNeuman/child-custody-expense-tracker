import { combineReducers } from  'redux';
import expensesReducer from './expensesReducer';
import expenseReducer from './expenseReducer';
import categoriesReducer from './categoriesReducer';
import categoryReducer from './categoryReducer';


export const rootReducer = combineReducers({
  expenses: expensesReducer,
  expense: expenseReducer,
  categories: categoriesReducer,
  category: categoryReducer
})
