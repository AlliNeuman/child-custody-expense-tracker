// import React, { Component } from 'react';
//
// class CategorySearch extends Component {
//   constructor() {
//     super();
//     this.state = {
//       categories: [],
//     };
//   }
//
//   componentDidMount = () => {
//     let initialCategories = [];
//     fetch('http://localhost3001/categories')
//     .then(response => {
//       return response.json();
//     }).then(data => {
//       initialCategories = data.results.map((category) => { return planet
//       });
//       console.log(initialCategories)
//       this.setState({
//         categories: initialCategories,
//       });
//     });
//   }
//
//   render() {
//     return (
//       <CategoryInput state={this.state} />
//     );
//   }
// }
//
// export default CategorySearch;
