import React from 'react';

const ExpenseForm = props => {
  const categoryOptions = props.categories.map((category) => {
    return (
      <option key={category.name} value={category.id} id={category.id}>{category.name.toUpperCase()}</option>
    )
  })

  return (
    <form id="expense-form" onSubmit={(event) => props.handleOnSubmit(event)} className="float-left">

      <div className="form-group form-row">
          <div className="col-sm">
          <input
          className="form-control input-sm"
          type="date"
          placeholder="Date"
          name="date"
          onChange={(event) => props.handleOnChange(event)}
          />
          </div>
        </div>

      <div className="form-group form-row">
        <div className="col-sm">
          <select
          className="form-control input-sm"
          placeholder="Select"
          name="category"
          onChange={(event) => props.handleOnChange(event)}
          >
          <option selected={true} disabled="disabled" hidden={true} >Select Category</option>
            {categoryOptions}
          </select>
        </div>
      </div>
      <p id="new-category-alert">Don't see what you're looking for? Create a new category.</p>



      <div className="form-group form-row">
          <div className="col-sm">
          <input
          className="form-control input-sm"
          type="text"
          placeholder="Description"
          name="description"
          onChange={(event) => props.handleOnChange(event)}
          />
          </div>
        </div>

      <div className="form-group form-row">
          <div className="col-sm">
          <input
          className="form-control input-sm"
          type="text"
          placeholder="Amount"
          name="amount"
          onChange={(event) => props.handleOnChange(event)}
          />
          </div>
        </div>

      <div className="form-group form-row">
          <div className="col-sm">
          <input
          className="form-control input-sm"
          type="text"
          placeholder="Reimbursement Rate"
          name="reimburse_percent"
          onChange={(event) => props.handleOnChange(event)}
          />
          </div>
        </div>

        <div className="form-group form-row">
            <div className="col-sm">
            <select
            className="form-control input-sm"
            placeholder="Select"
            name="paid"
            onChange={(event) => props.handleOnChange(event)}
            >
            <option hidden={true} selected={true} disabled="disabled">Select Paid</option>
            <option value="true">Paid</option>
            <option value="false">Not Paid</option>
            </select>
          </div>
        </div>

        <input
        className="input-sm btn btn-primary"
        type="submit"
        />
    </form>
  )
}

export default ExpenseForm;
