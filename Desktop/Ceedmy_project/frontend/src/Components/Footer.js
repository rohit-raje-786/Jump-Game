import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact";
const Footer = () => {
  return (
    <div>
      <MDBFooter className="font-small pt-4 mt-0 bg-primary text-white">
        <MDBContainer fluid className="text-center ">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6" className="text-white">
              <h5 className="title">Links</h5>
              <ul className="footer-links">
                <li className="list-unstyled text-white">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3 bg-primary">
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
