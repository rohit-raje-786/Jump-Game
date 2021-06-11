import "./App.css";

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Course from "./pages/Course/Course";
import Succes from "./pages/SuccesStory/Succes";
import About from "./pages/About/About";
import Upsc from "./pages/Course/Upsc";
import Mpsc from "./pages/Course/Mpsc";
import IIT from "./pages/Course/IIT.JEE";
import School from "./pages/Course/CBSE.ICSE.STATE";
import Clat from "./pages/Course/Clat";
import Neet from "./pages/Course/Neet";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/succes" component={Succes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/upsc" component={Upsc} />
        <Route exact path="/mpsc" component={Mpsc} />
        <Route exact path="/iit" component={IIT} />
        <Route exact path="/neet" component={Neet} />
        <Route exact path="/school" component={School} />
        <Route exact path="/clat" component={Clat} />
      </Switch>
    </>
  );
};
export default App;
