import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h3>Home</h3>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!!</div>,
    main: () => <h3>Bubblegum</h3>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>Shoelaces!!</div>,
    main: () => <h3>Shoelaces</h3>
  }
];

function SideBarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              ></Route>
            ))}
          </Switch>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                children={route.main}
              ></Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default SideBarExample;
