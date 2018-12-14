import React from 'react';

// import CategorySearch from './CategorySearch';

const ExpenseForm = props => {
  const categoryOptions = props.categories.map((category) => {
    return (
      <option key={category.name} value={category.id} id={category.id}>{category.name.toUpperCase()}</option>
    )
  })

  return (
    <form id="expense-form" onSubmit={(event) => props.handleOnSubmit(event)}>

      <div className="form-group form-row">
          <div className="col-sm">
          <input
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
          placeholder="Select"
          name="category"
          onChange={(event) => props.handleOnChange(event)}
          >
          <option selected={true} disabled="disabled" hidden={true} >Select Category</option>
            {categoryOptions}
          </select>
        </div>
      </div>

      <div className="form-group form-row">
          <div className="col-sm">
          <input
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
        type="submit"
        className="btn btn-primary"/>
    </form>
  )
}

export default ExpenseForm
