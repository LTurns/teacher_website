import React from "react";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
      >  <a href="/">
             <img
                  src={require("../assets/img/emt_logo.png")}
                  id="logo"
                  className="img-fluid"
                  alt=""
                ></img>
          </a>
        <div className="container"  id="mainNav">
  
          <a
            id="page_top"
            className="navbar-brand js-scroll-trigger mx-auto"
            href="/"
          >
{/*     
            <strong>E</strong>NGLISH <strong>M</strong>ASTER <strong>T</strong>
            EACHER */}
          </a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#book">
                  Prices and Booking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
