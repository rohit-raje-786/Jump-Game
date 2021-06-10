import "./App.css";

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Course from "./pages/Course/Course";
import Succes from "./pages/SuccesStory/Succes"

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/succes" component={Succes} />
      </Switch>
    </>
  );
};
export default App;
