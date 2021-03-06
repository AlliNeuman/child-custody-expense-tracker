import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {updateExpense} from '../actions/expenseActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ExpenseListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      date: props.date,
      category: props.category,
      description: props.description,
      amount: props.amount,
      reimburse_percent: props.reimburse_percent,
      paid: props.paid,
      parentObligation: parseFloat(props.amount * props.reimburse_percent).toFixed(2),
    }

    this.handlePaidClick = this.handlePaidClick.bind(this);
    }

    handlePaidClick = () => {
      this.setState( state => ({
        paid: !state.paid
      }));
      this.props.updateExpense({
        expense: {
          paid: !this.state.paid
        },
        id: this.state.id
      })
    }

  debugger
    render() {
      // const paidObligation = parseFloat((-1)*this.state.parentObligation).toFixed(2);

      const { date, category, description, amount, reimburse_percent, parentObligation } = this.state;

      return (
        <React.Fragment>
        <td className="col mx-1 px-3">
        {date}
        </td>

        <td className="col mx-1 px-3">
        {category}
        </td>

        <td className="col mx-1 px-3">
        {description}
        </td>

        <td className="col mx-1 px-3">
        ${amount}
        </td>

        <td className="col mx-1 px-3">
        {reimburse_percent}
        </td>

        <td>
        ${parentObligation}
        </td>


        <td className={this.state.paid ? "text-danger" : ""}>
        ${this.state.paid ? parentObligation : 0}
        </td>

        <td>
        <button className="btn btn-primary btn-sm" onClick={this.handlePaidClick}>
        {this.state.paid ? 'Paid' : 'Not Paid'}
        </button>
        </td>
        </React.Fragment>
      )
    }
  }


  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      updateExpense: updateExpense
    }, dispatch);
  };

  export default connect(null, mapDispatchToProps)(ExpenseListItem);
