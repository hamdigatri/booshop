import React from "react";
import { Link } from "react-router-dom";

const App = (
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
  </div>
);

export default App;
