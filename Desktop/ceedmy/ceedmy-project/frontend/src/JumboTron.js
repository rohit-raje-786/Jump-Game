import React, { Component } from "react";
import { Jumbotron, Button, Image, Carousel } from "react-bootstrap";

export default class JumboTron extends Component {
  render() {
    return (
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
    );
  }
}
