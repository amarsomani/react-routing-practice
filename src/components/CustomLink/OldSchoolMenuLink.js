import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

function OldSchoolMenuLink({ label, to, activeOnlyExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyExact
  });
  return (
    <div>
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default OldSchoolMenuLink;
