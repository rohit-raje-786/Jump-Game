import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./About.css";
const About = () => {
  return (
    <>
      <Header />
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us page</h1>
              <p className="lead text-muted mb-0">
                Created Using React BootStrap 4.0.
              </p>
              <p className="lead text-muted">
                Snippet by Ceedmy Web Developer's
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src="" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Ceedmy Acadmey Courses</h2>
              <p className="font-italic text-muted mb-4">
                We have the experience to guide and prepare the aspirants for
                all kinds of government jobs especially for UPSC, MPSC, SSC
                BANK, RAILWAY, MBA CAT CET XAT MAT CMAT CLAT and MAH CET LAW
                entrance exams.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src="" alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img src="" alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Our Goal and Mission</h2>
              <p className="font-italic text-muted mb-4">
                We provide personalized guidance to the students up to achieving
                her GOAL and it is unique.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src=""
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Sam Wilimson</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3 ">
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src=""
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Jackson Hardy</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3 ">
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src=""
                  alt=" "
                  width="100 "
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm "
                />
                <h5 className="mb-0 ">Jhon Rinch</h5>
                <span className="small text-uppercase text-muted ">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3 ">
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5 ">
              <div className="bg-white rounded shadow-sm py-5 px-4 ">
                <img
                  src=" "
                  alt=" "
                  width="100 "
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm "
                />
                <h5 className="mb-0 ">Rinky Thomas</h5>
                <span className="small text-uppercase text-muted ">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3 ">
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item ">
                    <a href="# " className="social-link ">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
