// May not need this separately. Could just be in the state of the main expense....
//
// import React from 'react';
// import '../App.css';
//
// class ExpensePaid extends Component {
//   constructor(props) {
//     super(props)
//     this.handlePaidClick = this.handlePaidClick.bind(this)
//     this.handleDueClick = this.handleDueClick.bind(this)
//   }
//
//   handlePaidClick() {
//     this.setState({isPaid: true});
//   }
//
//   handleDueClick() {
//     this.setState({isPaid: false});
//   }
//
//   render() {
//     const isPaid = this.state.isPaid;
//     let button;
//
//     if (isPaid) {
//       button = <DueButton onClick={this.handleDueClick} />;
//     } else {
//       button = <PaidButton onClick={this.handlePaidClick} />;
//     }
//
//     return (
//       <div>
//       {button}
//       </div>
//     );
//   }
// }
//
// export default ExpensePaid;
