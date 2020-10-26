import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./Home";
import WillMatch from "./WillMatch";
import NoMatch from "./NoMatch";

function NoMatchExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/old-match">Old Match</Link>
          </li>
          <li>
            <Link to="/will-match">Will Match</Link>
          </li>
          <li>
            <Link to="will-not-match">Will not match</Link>
          </li>
          <li>
            <Link to="also/will/not/match">It will also not match</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/old-match">
            <Redirect to="/will-match" />
          </Route>
          <Route path="/will-match">
            <WillMatch />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NoMatchExample;
