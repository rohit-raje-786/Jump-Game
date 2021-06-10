import React from "react";
import "./Succes.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
const Succes = () => {
  return (
    <div>
      <Header />
      <div class="testimonial10 py-5 bg-success-gradiant">
        <div class="container">
          <div class="owl-carousel owl-theme text-center testi10">
            <div class="item">
              <div class="quote-bg">
                <h3 class="font-weight-light text-white">
                  WrapKit has given our websites huge national presence.We are
                  #1 on page one in Google search results for every website
                  we’ve built, and rank for more keywords than I ever expected
                  in a very competitive, high-value customer industry. In
                  addition
                </h3>
              </div>
              <div class="customer-thumb my-3">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/1.jpg"
                  alt="wrapkit"
                  class="rounded-circle"
                />
              </div>
              <h6 class="text-white mb-0 font-weight-medium">
                Michael Anderson
              </h6>
              <span class="text-white">Project client</span>
            </div>

            <div class="item">
              <div class="quote-bg">
                <h3 class="font-weight-light text-white">
                  WrapKit has given our websites huge national presence.We are
                  #1 on page one in Google search results for every website
                  we’ve built, and rank for more keywords than I ever expected
                  in a very competitive, high-value customer industry. In
                  addition
                </h3>
              </div>
              <div class="customer-thumb my-3">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg"
                  alt="wrapkit"
                  class="rounded-circle"
                />
              </div>
              <h6 class="text-white mb-0 font-weight-medium">
                Michael Anderson
              </h6>
              <span class="text-white">Project client</span>
            </div>

            <div class="item">
              <div class="quote-bg">
                <h3 class="font-weight-light text-white">
                  WrapKit has given our websites huge national presence.We are
                  #1 on page one in Google search results for every website
                  we’ve built, and rank for more keywords than I ever expected
                  in a very competitive, high-value customer industry. In
                  addition
                </h3>
              </div>
              <div class="customer-thumb my-3">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/3.jpg"
                  alt="wrapkit"
                  class="rounded-circle"
                />
              </div>
              <h6 class="text-white mb-0 font-weight-medium">
                Michael Anderson
              </h6>
              <span class="text-white">Project client</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Succes;
