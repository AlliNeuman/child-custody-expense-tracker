// import React, { Component } from 'react';
// import { Button } from 'react'
//
// class PaidControl extends Component {
//   constructor(props) {
//     super(props);
//
//     this.handlePaidTrueClick = this.handlePaidTrueClick.bind(this);
//     this.handlePaidFalseClick = this.handlePaidFalseClick.bind(this);
// }
//     handlePaidTrueClick = () => {
//       this.setState({
//         paid: true
//       });
//     }
//
//     handlePaidFalseClick = () => {
//       this.setState({
//         paid: false
//       });
//     }
//
//     render() {
//       const isPaid = this.state.paid;
//
//       let button;
//
//       if (isPaid) {
//         button = <NotPaidButton onClick={this.handlePaidFalseClick} />;
//       } else {
//         button = <PaidButton onClick={this.handlePaidTrueClick} />;
//       }
//
//       return (
//         <div>
//         {button}
//         </div>
//       )
//
//     }
//
// }
//
// export default PaidControl;
