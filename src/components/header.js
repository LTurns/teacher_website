import React from "react";
import Footer from './footer'

export default class extends React.Component {
  render() {
    return (
      <div>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading text-uppercase">
              A professional English Teaching Service
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="/book"
            >
              Make a Booking
            </a>
          </div>
        </div>
      </header> 
      <Footer />
      </div>
    );
  }
}
