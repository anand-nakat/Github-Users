import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThemeSwitch from "./components/ThemeSwitch";
function App() {
  return (
    <>
      <Router>
        <ThemeSwitch />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
