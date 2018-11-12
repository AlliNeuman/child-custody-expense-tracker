import { combineReducers } from  'redux';
import expensesReducer from './expensesReducer';
import categoriesReducer from './categoriesReducer';
import { reducer as formReducer } from 'redux-form';


export const rootReducer = combineReducers({
  expenses: expensesReducer,
  categories: categoriesReducer,
  form: formReducer
})
