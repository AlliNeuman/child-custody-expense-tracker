import React from 'react';

const CategoryToggle = (props) => {
  return (
    <div className="pagination-centered btn-group btn-group-toggle" data-toggle="buttons">
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#${props.id}" aria-expanded="false" aria-controls="{props.id}">{props.name}</button>
      </div>
  )
}

export default CategoryToggle;
