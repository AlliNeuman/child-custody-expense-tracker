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
    const renderButton = () => {
      this.state.paid ?
          '<button className="btn-sm btn-success" onClick={this.handleClick}>Paid</button>' :

          '<button className="btn-sm btn-danger" onClick={this.handleClick}>Not Paid</button>'
        )
      }
    }
    return (
            <button className="btn-sm" onClick={this.handleClick}>
            {this.state.paid ? 'Not Paid' : 'Paid'}
            </button>
    );
  }
}

export default PaidButton;
