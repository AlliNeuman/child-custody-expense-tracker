import React from 'react';

const CategoryForm = ({handleOnChange, handleOnSubmit}) => {
  return (
    <form id="category-form" onSubmit={(event) => handleOnSubmit(event)} className="float-left">

      <div className="form-group form-row">
        <div className="col-sm">
        <input
        className="form-control input-sm"
        type="text"
        placeholder="Name"
        name="name"
        onChange={(event) => handleOnChange(event)}
        />
        </div>
      </div>

      <input
      className="input-sm btn btn-primary"
      type="submit"
       />
    </form>
  )
}

export default CategoryForm;
