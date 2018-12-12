import React, { Component } from 'react';


const CategoryList = ({categoriesList}) => {
  const renderCategories = categoriesList.map((category, index) => {
    return (
      <li>
      {category.name}
      </li>
    )
  })
  return (
    <ol>
    {renderCategories}
    </ol>
  )
}

export default CategoryList;
