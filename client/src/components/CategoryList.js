import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({categoriesList}) => {
  const renderCategories = categoriesList.map((category, index) => {
    return (
      <td className="row mx-1 px-3">
      <Link className="text-dark" to={`/categories/${category.id}`}>
      <h5>{category.name.toUpperCase()}</h5>
      </Link>
      </td>
    )
  })
  return (
    <ol>
    {renderCategories}
    </ol>
  )
}

export default CategoryList;
