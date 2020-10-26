import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OldSchoolMenuLink from "./OldSchoolMenuLink";
import Home from "./Home";
import About from "./About";

function CustomeLinkExample() {
  return (
    <Router>
      <div>
        <OldSchoolMenuLink to="/" label="Home" activeOnlyExact={true} />
        <OldSchoolMenuLink to="/about" label="About" />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default CustomeLinkExample;
