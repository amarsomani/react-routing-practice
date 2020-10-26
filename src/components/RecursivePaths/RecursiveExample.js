import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Person from "./Person";

function RecursiveExample() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Person />
        </Route>
        <Route path="/">
          <Redirect to="/0" />
        </Route>
      </Switch>
    </Router>
  );
}
export default RecursiveExample;
