import React from "react";
import Footer from './footer'

export default class Price extends React.Component {
  render() {
    return (
      <div className="page-section" id="book">
        <center>
          <h2 id="prices_title" className="section-heading text-uppercase">
            PRICES AND BOOKING
          </h2>
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
            <div className="col-xl-11 mx-auto text-center" id="booking_text">
              <a
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                id="continue_button"
                href="/booking"
              >
                Continue to Booking
              </a>
              <p className="prices-intro">
                All course prices include a separate one-to-one assessment of
                your English level, strengths and weaknesses and a discussion of
                your aims before you begin the course. All assessments and
                lessons take place via Zoom.
              </p>
              <p>Payments are to be made prior to the first lesson upon agreement of a lesson or course, subsequent to receiving a confirmation email from EMT Tutoring with the total payment required. Payments are to be made via PayPal or bank transfer at least 24 hours before your first lesson. When payment is received by EMT Tutoring you will be sent an email thanking you for your payment and confirming your upcoming lesson date & time.
 60 minute classes are 55 minutes of teaching +5 minutes of personalised report writing. 5 hour courses must be used within 5 weeks of date of purchase. 10 hour courses must be used within 10 weeks of date of purchase.</p>
              <p className="prices-intro">
                To avoid being charged, please ensure all cancellations are made
                at least 24 hours in advance.
              </p>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
