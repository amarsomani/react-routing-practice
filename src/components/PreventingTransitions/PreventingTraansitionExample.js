import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlockingForm from "./BlockingForm";

function PreventingTraansitionExample() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/" exact>
            Home
          </Link>
        </li>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route path="/" exact children={<BlockingForm />}></Route>
        <Route path="/one" children={<h3>One</h3>}></Route>
        <Route path="/two" children={<h3>Two</h3>}></Route>
      </Switch>
    </Router>
  );
}

export default PreventingTraansitionExample;
