import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExpenseDetail from './ExpenseDetail';
import CategoryToggle from './CategoryToggle';

const CategoryList = (props) => {

  const toggleCategories = props.categoriesList.map((category, index) => {
    return (
      <CategoryToggle
      key={category.id}
      id={category.id}
      name={category.name}
      expenses={category.expenses}
      />
    )
  })

  return (
    <div>
    {toggleCategories}
    </div>
  )
}

export default CategoryList;
