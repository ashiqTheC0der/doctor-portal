import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appointment from "./components/appointment/appointment/Appointment";
import Dashborad from "./components/dashborad/dashborad/Dashborad";
import Home from "./components/home/home/Home";
import Login from "./components/loginUser/login/Login";


function App() {
  return (
     <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/deshborad">
          <Dashborad></Dashborad>
        </Route>
        <Route>
          <Login path="Login"></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;