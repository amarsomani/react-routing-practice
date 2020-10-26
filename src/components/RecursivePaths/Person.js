import React from "react";
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Person() {
  let { url } = useRouteMatch();
  let { id } = useParams();
  let person = find(parseInt(id));
  console.log("url " + url);
  return (
    <div>
      <h3>{person.name}’s Friends</h3>

      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${url}/:id`}>
          <Person />
        </Route>
      </Switch>
    </div>
  );
}

const PEEPS = [
  { id: 0, name: "Rahul", friends: [1, 2, 3] },
  { id: 1, name: "Lokesh", friends: [0, 3] },
  { id: 2, name: "Sourabh", friends: [0, 1, , 3] },
  { id: 3, name: "Vimal", friends: [1, 2] }
];

const find = id => {
  return PEEPS.find(person => person.id === id);
};
export default Person;
