import React from 'react';
import { Form, Button } from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const ExpenseForm = (props) => {
  return (
    <Form id="expense-form" onSubmit={(event) => props.handleOnSubmit(event)}>

      <div className="form-group form-row">
        <div className="col-sm">
          <DayPickerInput
            className="form-control"
            placeholder="Date"
            name="selectedDay"
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
          name="reimbursement"
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
            <option value="select">Select</option>
            <option value="true">Paid</option>
            <option value="false">NotPaid</option>
            </select>
          </div>
        </div>

        <Button
        type="submit"
        className="btn btn-primary"
        >
        Add Expense
        </Button>
    </Form>
  )
}

export default ExpenseForm