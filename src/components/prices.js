import React from "react";
import Navigation from './navigation.js'

export default class Price extends React.Component {
  render() {
    return (
      <div className="page-section" id="book">
         <Navigation />
        <center>
          <h1 id="prices_title" className="section-heading text-uppercase">
            PRICES AND BOOKING
          </h1>
        </center>
        <div className="container" id="price">
          <div className="row">
            <div className="col-lg-12">
              <p className="prices-intro">
                Please see the list of options and prices below.
              </p>
              <table class="table table-light">
                <thead>
                  <tr>
                    <td><strong>Service</strong></td>
                    <td><strong>Price (hourly rate)</strong></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Single Lesson</td>
                    <td>€35.00</td>
                  </tr>
                  <tr>
                    <td value="B">5 Hour Mini Course</td>
                    <td>€33.00</td>
                  </tr>
                  <tr>
                    <td value="C">10 Hour Progressive Course</td>
                    <td>€30.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <a
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                id="continue_button"
                href="#booking"
              >
                Continue to Booking
              </a>
              <p className="prices-intro">
                All course prices include a separate one-to-one assessment of
                your English level, strengths and weaknesses and a discussion of
                your aims before you begin the course. All assessments and
                lessons take place via Zoom.
              </p>
              <p className="prices-intro">
                To avoid being charged, please ensure all cancellations are made
                at least 24 hours in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
