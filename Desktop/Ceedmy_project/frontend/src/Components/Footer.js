import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact";
const Footer = () => {
  return (
    <div >
      <MDBFooter className="font-small pt-4 mt-0 bg-dark text-dark">
        <MDBContainer fluid className="text-center text-dark">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title text-light">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6" className="ft">
              <h5 className="title text-light">Page</h5>
              <ul className="footer-links">
                <li className="list-unstyled ">
                  <a href="#!">Home</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Buy a Course</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Succes Stories</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">About us</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3 bg-dark">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com" className="footer-cp">
              {" "}
              Ceedmy.com{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
