import React, { Component } from "react";
import { Row, Col, Container, Image, Carousel } from "react-bootstrap";
import "./App.css";

export default class Feedback extends Component {
  render() {
    return (
      <div className="cnt mt-3">
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
                <p className="text-wrap" style={{"width": "15rem"}}>
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
                <p className="text-wrap" style={{"width": "15rem"}}>
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
                <p className="text-wrap" style={{"width": "15rem"}}>
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
                <p className="text-wrap" style={{"width": "15rem"}}>
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
                <p className="text-wrap" style={{"width": "15rem"}}>
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
                <p className="text-wrap" style={{"width": "15rem"}}>
                  lorem ipsum tirofno dnknvn frtjrebffjdkw ofnofggg hbhbni
                  ojpkkp lorem ipsum tirofno dnknvn frtjrebffjdkw
                </p>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>

    
    );
  }
}
