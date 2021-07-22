import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import MoviePage from "./pages/MoviePage";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);

  /* useEffect(() => {
    let token = localStorage.getItem("myToken");
    try {
      if (jwt_decode(token)) setUser(jwt_decode(token));
    } catch {
      return;
    }
  }, []);*/

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/movies" exact component={MoviePage} />
        {/*<Route path="/reviews" exact component={ReviewPage} />*/}
      </Switch>
    </Router>
  );
}

export default App;
