import React from "react";
import Link from "react-router-dom";
import ReactDOM from "react-dom";

const App = props => {
  console.log("app**");
  return (
    <div>
      <h1>Bookshop</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
      </ul>
      <div>{props.children}</div>
    </div>
  );
};
export default App;

ReactDOM.render(App, document.querySelector("#app"));
