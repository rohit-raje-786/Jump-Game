import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Form from "./Form";
import Card from "./Card";
import {
  Button,
  Image,
  Carousel,
  Container,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mediabrief.com/wp-content/uploads/2020/05/image-ShahRukh-Khan-Learning-Talk-Show-on-Byjus-MediaBrief.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.medianews4u.com/wp-content/uploads/2020/09/This-IPL-season-BYJU%E2%80%99S-partners-with-Shah-Rukh-Khan-to-unveil-BYJU%E2%80%99S-Classes.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mediabrief.com/wp-content/uploads/2020/05/image-ShahRukh-Khan-Learning-Talk-Show-on-Byjus-MediaBrief.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="Form-Container bg-light">
        <h1 className="text-dark">Book a free Class</h1>
        <Container className="justify-content-md-center">
          <Form />
        </Container>
      </div>
      <Card />
      <div className="cnt mt-5 mb-3">
        <h1 className="text-center">Our Students</h1>
        <Carousel fade className="txt-color">
          <Carousel.Item>
            <Row className="justify-content-md-center">
              <Col sm={3} md="auto" className="mx-auto">
                <Image
                  src="https://i.pinimg.com/236x/bf/57/02/bf57026ee75af2f414000cec322f7404.jpg"
                  className="FeedbackImg"
                  roundedCircle
                />
                <h2>Steve Jobs</h2>
                <p className="text-wrap" style={{ width: "15rem" }}>
                  lorem ipsum tirofno dnknvn frtjrebffjdkw ofnofggg hbhbni
                  ojpkkp lorem ipsum tirofno dnknvn frtjrebffjdkw
                </p>
              </Col>
              <Col sm={3} md="auto" className="mx-auto">
                <Image
                  src="https://i.pinimg.com/564x/6d/d1/19/6dd119e1de9237bee140fbff239d56eb.jpg"
                  className="FeedbackImg"
                  roundedCircle
                />
                <h2>Bill Gates</h2>
                <p className="text-wrap" style={{ width: "15rem" }}>
                  lorem ipsum tirofno dnknvn frtjrebffjdkw ofnofggg hbhbni
                  ojpkkp lorem ipsum tirofno dnknvn frtjrebffjdkw
                </p>
              </Col>
              <Col sm={3} md="auto" className="mx-auto">
                <Image
                  src="https://i.pinimg.com/236x/bf/57/02/bf57026ee75af2f414000cec322f7404.jpg"
                  className="FeedbackImg"
                  roundedCircle
                />
                <h2>Mark Zuckerberg</h2>
                <p className="text-wrap" style={{ width: "15rem" }}>
                  lorem ipsum tirofno dnknvn frtjrebffjdkw ofnofggg hbhbni
                  ojpkkp lorem ipsum tirofno dnknvn frtjrebffjdkw
                </p>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-md-center">
              <Col sm={4} md="auto" className="mx-auto">
                <Image
                  src="https://i.redd.it/vqfe518ghnn31.jpg"
                  className="FeedbackImg"
                  roundedCircle
                />
                <h2>Harry Potter</h2>
                <p className="text-wrap" style={{ width: "15rem" }}>
                  lorem ipsum tirofno dnknvn frtjrebffjdkw ofnofggg hbhbni
                  ojpkkp lorem ipsum tirofno dnknvn frtjrebffjdkw
                </p>
              </Col>
              <Col sm={4} md="auto" className="mx-auto">
                <Image
                  src="https://i.pinimg.com/474x/74/9d/eb/749deb654e80d0dfb1346e772ae49711.jpg"
                  className="FeedbackImg"
                  roundedCircle
                />
                <h2>Steve Woznaik</h2>
                <p className="text-wrap" style={{ width: "15rem" }}>
                  lorem ipsum tirofno dnknvn frtjrebffjdkw ofnofggg hbhbni
                  ojpkkp lorem ipsum tirofno dnknvn frtjrebffjdkw
                </p>
              </Col>
              <Col sm={4} md="auto" className="mx-auto">
                <Image
                  src="https://pbs.twimg.com/media/D_o3TfkWsAAVHRM.jpg"
                  className="FeedbackImg"
                  roundedCircle
                />
                <h2>Larry Page</h2>
                <p className="text-wrap" style={{ width: "15rem" }}>
                  lorem ipsum tirofno dnknvn frtjrebffjdkw ofnofggg hbhbni
                  ojpkkp lorem ipsum tirofno dnknvn frtjrebffjdkw
                </p>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
