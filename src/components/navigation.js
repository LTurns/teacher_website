import React from "react";

export default class Navigation extends React.Component {
  render() {
    return (
<div>
      <nav class="navbar navbar-expand-lg py-3 navbar-light bg-dark" id="mainNav">
  <div class="container">
    <a href="#" className="navbar-brand  mx-auto">
      <img src={require("../assets/img/logo_2.png")} width="90" alt="" id="logo"/>
    </a>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        {/* <li class="nav-item active"><a href="#" class="nav-link">Home <span class="sr-only">(current)</span></a></li> */}
        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a href="#services" class="nav-link">Services</a></li>
        <li class="nav-item"><a href="#book" class="nav-link">Prices and Booking</a></li>
        <li class="nav-item"><a href="#book" class="nav-link">Privacy</a></li>
        <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>

    );
  }
}
