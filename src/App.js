import React from 'react';
import Contact from './components/contact'
import Portfolio from './components/Portfolio'
import './App.css';

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a id="page_top" className="navbar-brand js-scroll-trigger" href="/"><strong>E</strong>NGLISH  <strong>M</strong>ASTER <strong>T</strong>EACHER</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#book">Prices and Booking</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-heading text-uppercase">A professional English Teaching Service</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#book">Make a Booking</a>
      </div>
    </div>
  </header>

  {/* about */}


  <div className="page-section" id="about">
  <center><h1 id="about_title" className="section-heading text-uppercase">About</h1></center>
    <div className="container" id="about_mid">
      <div className="row no-gutters">
        {/* <div className="col-lg-12">
        <center>
          </center>
          </div> */}
          <div className="col-lg-6">
            <center>
          <img src={require('./assets/img/chris.png')} id="chris" className="img-fluid" alt=""></img>
          </center>
          </div>

          <div className="col-lg-6">
          <div className="timeline-panel">
                <div className="intro-body">
                  <p>Hey! My name is Chris, I'm a qualified advanced ESL instructor with a BA and Masters degree in English Literature and Creative Writing from Exeter University in the UK (Top 10 universities in Europe). I've spent time teaching in England and India, and I'm now based in Stockholm.</p>
                     <p>I create English courses to match the needs and interests of my students, in order to make your learning as fun, personal and effective as possible. I will also give advice on how best to continue learning outside of the lesson, for even faster progress.</p>
                  <p>Whether you are trying to improve your fluency and confidence in conversation, practicing for exams and job interviews, or are hoping to expand your vocabulary, together we will assess your goals and create a step-by-step program that works towards them - at your pace.</p>
                  <p>I’m a firm believer that the more relaxed you are, and the more relevant the topics are to your life, the easier and more enjoyable it is to learn. I really look forward to hearing from you!</p>

                  <img src={require('./assets/img/tefl.png')} id="tefl" className="img-fluid center mx-auto" alt=""></img>
                  </div>
              </div>
          </div> 
        <div className="col-lg-12">   
      <div className="container">
    </div> 
</div>  
</div>
</div>
</div>

{/* services */}


<div className="page-section" id="services">
  <center>
    <h1 id="about_title" className="section-heading text-uppercase">Services</h1></center>
    <div className="container" id="table">
    <div className="row no-gutters">
        <div className="col-lg-6">
          <div id="service-stuff">
          <ul className="service-points">
            <li>Personalised ESL (English as a Second Language) tuition for all abilities age 16+.</li>
            <li>Focused learning tailored to your aims.</li>
            <li>Preparation for exams, interviews, or just everyday life.</li>
            <li>I also offer proof reading services for university undergraduates, specialising in literature and art. Contact me for enquires and prices.</li>
            </ul>
            <p className="service-example">Below is a course I designed with one of my regular students. She is a Swedish Iranian who was hoping to improve her conversation skills so she could communicate more comfortably with her English son-in-law. So we discussed her interests, subjects that excite her, and the activities she does on a regular basis. I then included these topics in her learning over a 10 week lesson plan.
            We would go through exercises together in our lessons, and I would then set her some work to do in between classes to further develop the skills we had practiced during our time together.</p>
          </div>
          </div>
          <div className="col-lg-6">
          <img src={require('./assets/img/officehome.jpg')} id="officepic" className="img-fluid" alt=""></img>
          </div>
          </div>
      <div className="row">
        <div className="col-lg-12">     
  <table class="table table-light">
    <tbody>
      <tr>
        <th>Lesson 1: </th>
        <td>Food and flavour- Adjectives</td>
      </tr>
      <tr>
        <th>Lesson 2:</th>
        <td>Food and flavour- Comparative adjectives</td>
      </tr>
      <tr>
        <th>Lesson 3:</th>
        <td>Family members and friends-  verb 'to have' in past, present and future tense.</td>
      </tr>
      <tr>
        <th>Lesson 4:</th>
        <td>Family members and friends- comparing personality traits and looks.</td>
      </tr>
      <tr>
        <th>Lesson 5:</th>
        <td>Modal Verbs related to lesson 3. Must, can, could, shall, should, might.</td>
      </tr>
      <tr>
        <th>Lesson 6:</th>
        <td>Listening skills. Various exercises to develop listening skills, using the topics already covered.</td>
      </tr>
      <tr>
        <th>Lesson 7:</th>
        <td>Workplace vocabulary. Where do you work, why? Do you prefer it to other jobs you have had? (Using comparative adjectives from lesson 2)</td>
      </tr>
      <tr>
        <th>Lesson 8:</th>
        <td>Technology. What technology do you use, why do you find it useful? Is it always a good thing?</td>
      </tr>
      <tr>
        <th>Lesson 9:</th>
        <td>Day out in the mall. Describe activities one might do in various stores, express preference for particular shops.</td>
      </tr>
      <tr>
        <th>Lesson 10:</th>
        <td>Going on holiday! Describing activities, food, and people you would spend time with.</td>
      </tr>

    </tbody>
  </table>
</div>
</div>
    </div>
    </div>


    {/* prices and booking */}
  


  <div className="page-section" id="book">
  <center>
    <h1 id="about_title" className="section-heading text-uppercase">Prices and Booking</h1></center>
    <div className="container" id="price">
      <div className="row">
        <div className="col-lg-12">
          <p className="prices-intro">Please see the list of options and prices below.</p>        
  <table class="table table-light">
    <thead>
      <tr>
        <th>Service</th>
        <th>Price (hourly rate)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Single Lesson</td>
        <td>€35.00</td>
      </tr>
      <tr>
        <td>5 Hour Mini Course</td>
        <td>€33.00</td>
      </tr>
      <tr>
        <td>10 Hour Progressive Course</td>
        <td>€30.00</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="prices-intro">All course prices include a separate one-to-one assessment of your English level, strengths and weaknesses and a discussion of your aims before you begin the course. All assessments and lessons take place via Zoom.</p>
          <p className="prices-intro">To avoid being charged, please ensure all cancellations are made at least 24 hours in advance.</p>
        </div>
      </div>
    </div>
  </div>


<Contact />
  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
          <span className="copyright">Copyright &copy; English Master Teacher 2020</span>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
