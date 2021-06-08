import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./JumboTron";
import Form from "./Form";
import Card from "./Card";
import Feedback from "./Feedback";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <Form />
        <Card />
        <Feedback />
        <Footer />
      </>
    );
  }
}

export default App;
