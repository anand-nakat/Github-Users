import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThemeSwitch from "./components/ThemeSwitch";
function App() {
  return (
    <>
      <AuthWrapper>
        <Router>
          <ThemeSwitch />
          <Switch>
            <PrivateRoute exact path="/">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </AuthWrapper>
    </>
  );
}

export default App;
