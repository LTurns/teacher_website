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
<div className="header-paragraph">
            <p>English Master Teacher was created to inspire people of all ages in their English learning. We provide one-on-one and small group lessons online, no matter what level you’re at.  
 Whether you want to develop your fluency in conversation, practice for a job interview or exam, or just want to get ahead of the rest of the class, EMT can create a personalised course for your specific needs and with your aims in mind, to begin learning English online. Want to know more? Click on the About link in the menu and find out about the services we offer.</p>
<p>Why not get in contact with us today using the booking link below, and we can design a course that suits you.</p><p>
 We really look forward to hearing from you!</p>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="/book"
            >
              Make a Booking
            </a>
            </div>
          </div>
        </div>
      </header> 
      <Footer />
      </div>
    );
  }
}
