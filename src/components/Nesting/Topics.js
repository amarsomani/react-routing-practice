import React from "react";
import { useRouteMatch, Link, Route, Switch } from "react-router-dom";
import Topic from "./Topic";
function Topics() {
  let { path, url } = useRouteMatch();
  console.log("path = " + path);
  console.log("url = " + url);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/prop-v-state`}>Prop v state</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic</h3>
        </Route>
        <Route path={`${path}/:id`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

export default Topics;
