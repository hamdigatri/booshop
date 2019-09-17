import React from "react";
import { Route, IndexRoute } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Book from "./components/book";
import App from "./components/app";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/books" component={Book}></Route>
  </Route>
);
