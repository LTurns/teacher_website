import React from 'react';
import axios from 'axios'

export default class Contact extends React.Component {

    constructor(props){
        super(props)
         this.state = {
            name: '',
            phone: '',
            email: '',
            message: ''
            }

    this.changeValue = this.changeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

            
  }

  changeValue = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

  onSubmit = (event) => {
      event.preventDefault();

      const post = {
        message: this.state.message,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email
      };


      axios.post('https://tranquil-taiga-20049.herokuapp.com/', {
        post
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


         this.reset();

  }

  reset(){
    this.setState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
  }

  render(){
    return(

          
  <section className="page-section" id="contact">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Contact Me</h2>
        <h3 className="section-subheading text-muted">If you have any queries, please do not hesitate to get in touch.</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" id="name" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." value={this.state.name} onChange={this.changeValue}/>
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input className="form-control" id="email" type="email" name="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."  value={this.state.email} onChange={this.changeValue}/>
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input className="form-control" id="phone" type="tel" name="phone" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." value={this.state.phone} onChange={this.changeValue}/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea className="form-control" id="message" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." value={this.state.message} onChange={this.changeValue}></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-lg-12 text-center">
              <div id="success"></div>
              <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    )
  }

}