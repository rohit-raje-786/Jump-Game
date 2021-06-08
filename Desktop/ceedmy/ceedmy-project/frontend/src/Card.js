import React, { Component } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";

export default class card extends Component {
  render() {
    return (
      <Container className="justify-content-md-center">
        <Row>
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/hBJ7eONSsbw/maxresdefault.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Know More</Card.Link>
                <Button className="mx-2">Book Free Class</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/hBJ7eONSsbw/maxresdefault.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Know More</Card.Link>
                <Button className="mx-2">Book Free Class</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/hBJ7eONSsbw/maxresdefault.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Know More</Card.Link>
                <Button className="mx-2">Book Free Class</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/hBJ7eONSsbw/maxresdefault.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Know More</Card.Link>
                <Button className="mx-2">Book Free Class</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
