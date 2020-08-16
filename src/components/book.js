import React from 'react';
import axios from 'axios'

export default class Book extends React.Component {

    constructor(props){
        super(props)
         this.state = {
            name: '',
            phone: '',
            email: '',
            service: '', 
            topics: '',
            submitted: false
            }

    this.changeValue = this.changeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

   
  }

 

  changeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

  onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        submitted: true
   });

   const post = {
    // service: this.state.service,
    name: this.state.name,
    phone: this.state.phone,
    email: this.state.email,
    topics: this.state.topics
  };

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;',
        "Access-Control-Allow-Origin": "*",
    }
  };


  axios.post('http://localhost:4000/api/new-student', {
     axiosConfig, post
  })
  .then(function (response) {
    console.log(response);
    console.log("hey!")
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
        service: '', 
        topics: ''
    });
  }

  render(){

   if (this.state.submitted === true){
    return(

     <div className="page-section" id="booking">
        <h1 id="booking_title" className="section-heading text-center">BOOK</h1>
        <div className="container">
      <div className="row" id="form">
        <div className="col-lg-12">
         <div id="confirm">
           <div>
             <p className="confirmation text-center">Your booking enquiry has been submitted successfully!<br></br><br></br>I will be in touch within the next few days to arrange a Zoom call.</p>
           </div>
           </div>
           </div>
           </div>
           </div>
         </div>)

   } else {
    return (
         <div className="page-section" id="booking">
         <h1 id="booking_title" className="section-heading text-center">BOOK</h1>
    <div className="container">
      <div className="row" id="form">
        <div className="col-lg-12">
         <div id="confirm">
         <p className="booking-intro text-center"> Please select a service and fill in the required details</p>

         <form id="bookForm" name="sentMessage" noValidate="novalidate" onSubmit={this.onSubmit}>


         <div className="form-group mx-auto">
          <center>
         <select className="dropdown mx-auto" id="dropdown" name="service"
              onChange={this._handleChange}
              placeholder="Select a service"
              ref={ref => {
                this._select = ref
              }}
              defaultValue={this.state.service}
            >
              <option value="Single Lesson">Single Lesson</option>
              <option value="5 Hour Mini Course">5 Hour Mini Course</option>
              <option value="10 Hour Progressive Course">10 Hour Progressive Course</option>
            </select>
            </center>
            </div>


              <div className="form-group mx-auto">
                <input className="form-control" id="name" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." value={this.state.name} onChange={this.changeValue}/>
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mx-auto">
                <input className="form-control" id="email" type="email" name="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."  value={this.state.email} onChange={this.changeValue}/>
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mx-auto">
                <input className="form-control" id="phone" type="tel" name="phone" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." value={this.state.phone} onChange={this.changeValue}/>
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mx-auto">
                <textarea className="form-control" id="message" name="topics" placeholder="Please let me know any topics you would like to discuss." value={this.state.message} onChange={this.changeValue}></textarea>
                </div>

             
            <div className="clearfix"></div>
            <div className="col-lg-12 text-center">
              <div id="success"></div>
              <button id="bookbutton" className="btn btn-primary btn-xl text-uppercase" type="submit">Book</button>
            </div>
        </form>
      </div>
      </div>
   </div>
  </div>
  </div>
    )}
  }

}