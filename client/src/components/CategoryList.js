import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExpenseDetail from './ExpenseDetail';
import CategoryToggle from './CategoryToggle';

const CategoryList = ({categoriesList}) => {
  // const renderCategories = categoriesList.map((category, index) => {
  //   return (
  //     <div className="card">
  //     <div className="card-body">
  //     <Link className="text-dark" to={`/categories/${category.id}`}>
  //     <h5>{category.name.toUpperCase()}</h5>
  //     </Link>
  //     </div>
  //     </div>
  //   )
  // })

  const toggleCategories = categoriesList.map((category, index) => {
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
