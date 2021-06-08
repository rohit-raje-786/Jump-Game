import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  Button,
  Nav,
  FormControl,
} from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Ceedmy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="StudyMaterial" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Scholarship" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Buy a Course</Nav.Link>
            <Nav.Link href="#">Succes Stories</Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <Button variant="outline-success" className="float-right">
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
