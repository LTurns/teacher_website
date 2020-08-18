import React from "react";
import axios from "axios";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      submitted: false,
      type: "Enquiry",
    };

    this.changeValue = this.changeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });

    const post = {
      message: this.state.message,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      type: this.state.type,
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    // https://tranquil-taiga-20049.herokuapp.com/api/form'
    // "https://tranquil-taiga-20049.herokuapp.com/api/new-enquiry"

    // axios({
    //   url: "https://localhost:4000/api/new-enquiry",
    //   method: "POST",
    //   data: post,
    //   headers: axiosConfig,
    // })
    
      axios.post('http://localhost:4000/api/new-enquiry', post, axiosConfig)

      .then((response) => {
        console.log("Data has been sent to server");
        console.log(response);
      })

      .catch((error) => {
        console.log(error);
      });
    this.reset();
  };

  reset() {
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  }

  render() {
    if (this.state.submitted === true) {
      return (
        <div className="page-section1" id="contact">
          <h1
            id="contact_title"
            className="section-heading text-uppercase text-center"
          >
            CONTACT
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="contacts">
                  <p className="confirmation text-center">
                    Thank you for your query. I will be in touch shortly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="page-section1" id="contact">
          <h1
            id="contact_title"
            className="section-heading text-uppercase text-center"
          >
            CONTACT
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="contacts">
                  <p className="contact-intro text-center">
                    {" "}
                    Please fill in the below form if you have an enquiry.
                    <br></br>
                    <br></br>Alternatively, you can email me directly at{" "}
                    <a id="email" href="mailto:englishmasterteacher@gmail.com">
                      englishmasterteacher@gmail.com
                    </a>
                    .
                  </p>
                  <form
                    id="contactForm"
                    name="sentMessage"
                    noValidate="novalidate"
                    onSubmit={this.onSubmit}
                  >
                    <div className="form-group mx-auto">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                        value={this.state.name}
                        onChange={this.changeValue}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group mx-auto">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                        value={this.state.email}
                        onChange={this.changeValue}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group mx-auto">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Your Phone *"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                        value={this.state.phone}
                        onChange={this.changeValue}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group mx-auto">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                        value={this.state.message}
                        onChange={this.changeValue}
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
