import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./App.css";

export default class form extends Component {
  render() {
    return (
      <div className="Form-Container">
        <h1>Book a free Class</h1>
        <Container className="justify-content-md-center">
          <Form >
            <Form.Group controlId="">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your Name" />
            </Form.Group>

            <Form.Group controlId="">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your Phone Number" />
            </Form.Group>

            <Form.Group controlId="">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" />
            </Form.Group>
            <Form.Group  controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="State">
                <option >state</option>
                <option>Gujrat</option>
                <option>Maharashtra</option>
              </Form.Control>
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Schedule a Free Class
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
