import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class PaidButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paid: props.paid
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState( state => ({
      paid: !state.paid
    }));
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
      {this.state.paid ? 'Not Paid' : 'Paid'}
      </Button>
    );
  }
}

export default PaidButton;
