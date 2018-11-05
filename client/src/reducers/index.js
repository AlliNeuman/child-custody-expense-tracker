import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import categoryReducer from './categoryReducer';
import expenseReducer from './expenseReducer';
import expensesReducer from './expensesReducer';

export const rootReducer = combineReducers({
  expenses: expensesReducer,
  expense: expenseReducer,
  categories: categoriesReducer,
  category: categoryReducer
});
