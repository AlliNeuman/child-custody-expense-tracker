import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export const Home = () =>
<div className="container center">
  <h2 className="WelcomeMessage">Welcome to YOM!</h2>
  <p className="HomeDescription">Need help tracking your childcare expenses? This will help you keep track of outstanding and paid expenses so you do not lose your mind!</p>
  <div className="col-xs-12">
    <div className="jumbotron center you-owe-me">

      <Link to="/expenses">
        <button type="button" className="btn btn-lg btn-primary">You Owe Me
        </button>
      </Link>
    </div>

    </div>
</div>
