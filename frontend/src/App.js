
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import MoviePage from "./pages/MoviePage";
//import jwt_decode from "jwt-decode";

function App() {
 

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/movies" exact component={MoviePage} />
      </Switch>
  </Router>
  );
}

export default App;
