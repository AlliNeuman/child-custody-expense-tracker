import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react'

class PaidControl extends Component {
  constructor(props) {
    super(props);

    this.handlePaidTrueClick = this.handlePaidTrueClick.bind(this);
    this.handlePaidFalseClick = this.handlePaidFalseClick.bind(this);
}
    handlePaidTrueClick = () => {
      this.setState({
        paid: true
      });
    }

    handlePaidFalseClick = () => {
      this.setState({
        paid: false
      });
    }

    render() {
      const isPaid = this.state.paid;

      return (
        <ButtonGroup>
        <Button onClick={this.handlePaidTrueClick}>Paid</Button>
        <Button onClick={this.handlePaidFalseClick}>Not Paid</Button>
        </ButtonGroup>
      )

    }

}

export default PaidControl;
