import React from "react";
import {
  Link
} from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
<div>
      <nav class="navbar navbar-expand-lg py-3 navbar-light bg-dark" id="mainNav">
  <div class="container">
    <a href="/" className="navbar-brand">
      <img src={require("../assets/img/logo_2.png")} width="90" alt="" id="logo"/>
    </a>

    {/* <div id="navbarSupportedContent" class="collapse navbar-collapse"> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        {/* <li class="nav-item active"><a href="#" class="nav-link">Home <span class="sr-only">(current)</span></a></li> */}
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li class="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
        <li class="nav-item"><Link to="/book" className="nav-link">Prices and Booking</Link></li>
        <li class="nav-item"><Link to="/privacy" className="nav-link">Privacy</Link></li>
        <li class="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>
</div>

    );
  }
}
