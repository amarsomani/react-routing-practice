import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Child from "./Child";
function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus create</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id" children={<Child />}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default ParamsExample;
