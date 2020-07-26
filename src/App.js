import React from 'react';
// import logo from './logo.svg';
import Contact from './components/contact'
import './App.css';

function App() {
  // const portfolioLinks = [
  //   {
  //     title: 'Threads',
  //     caption: 'Illustration'
  //   },
  //   {
  //     title: 'Explore',
  //     caption: 'Graphic Design'
  //   },
  //   {
  //     title: 'Finish',
  //     caption: 'Identity'
  //   },
  //   {
  //     title: 'Lines',
  //     caption: 'Branding'
  //   },
  //   {
  //     title: 'Southwest',
  //     caption: 'Website Design'
  //   },
  //   {
  //     title: 'Window',
  //     caption: 'Photography'
  //   },
  //   {
  //     title: 'Pizza',
  //     caption: 'I love pizza!'
  //   }
  // ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">EMT - English Master Teacher</a>
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
            <a className="nav-link js-scroll-trigger" href="#portfolio">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Prices and Booking</a>
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
        <div className="intro-lead-in">GET STARTED TODAY</div>
        <div className="intro-heading text-uppercase">A professional English Teaching Service</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#team">Make a Booking</a>
      </div>
    </div>
  </header>

  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <center>
          <h2 id="about" className="section-heading text-uppercase">About</h2>
          </center>
          </div>
          <div className="col-lg-6">
            <center>
          <img src={require('./assets/img/chris.png')} id="chris" class="img-fluid" alt=""></img>
          </center>
          </div>

          <div className="col-lg-6">
          <div className="timeline-panel">
                <div className="intro-body">
                  <p className="text-muted">Hey! My name is Chris, I'm a qualified advanced ESL instructor with a BA and Masters degree in English Literature and Creative Writing from Exeter University in the UK (Top 10 universities in Europe). I've spent time teaching in England and India, and I'm now based in Stockholm.</p>
                  <p className="text-muted">I create English courses to match the needs and interests of my students, in order to make your learning as fun, personal and effective as possible. I will also give advice on how best to continue learning outside of the lesson, for even faster progress.</p>
                  <p className="text-muted"> Whether you are trying to improve your fluency and confidence in conversation, practicing for exams and job interviews, or are hoping to expand your vocabulary, together we will assess your goals and create a step-by-step program that works towards them- at your pace.</p>
                  <p className="text-muted">I’m a firm believer that the more relaxed you are, and the more relevant the topics are to your life, the easier and more enjoyable it is to learn. I really look forward to hearing from you!</p>
                  </div>
              </div>
          </div>

             <div className="col-lg-12">   
             <div className="container">
</div> 
</div>
           
      </div>
      </div>
      </section>
  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Prices and Booking</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
            <h6>Individual Lessons</h6><br></br><p></p>
           
            <p className="text-muted">£50.00 p/h</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
            <h6>Group Lessons (2 or more people)</h6><br></br>
    
            <p className="text-muted">£80.00 p/h</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
            <h6>Individual Lessons - Monthly</h6><br></br>
            {/* <p className="text-muted">1 person</p> */}
            <p className="text-muted">£50.00 p/h</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
            <h6>Group Lessons - Monthly</h6><br></br>
            <p className="text-muted">£75p/h</p>
            <ul className="list-inline social-buttons">
          
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
          
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

<Contact />


  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Your Website 2019</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
