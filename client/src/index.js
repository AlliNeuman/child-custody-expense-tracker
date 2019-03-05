// react imports
// import { Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
// import history from './history';
// add router history={history}
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux imports
import { Provider } from 'react-redux';
import store from './store.js';

// styling imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
