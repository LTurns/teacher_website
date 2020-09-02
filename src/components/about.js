import React from "react";
import Navigation from './navigation.js'

export default class About extends React.Component {
  render() {
    return (
      <div className="page-section" id="about">
        <Navigation />
        <center>
          <h1 id="about_title" className="section-heading text-uppercase">
            ABOUT
          </h1>
        </center>
        <div className="container" id="about_mid">
          <div className="row no-gutters">
            {/* <div className="col-lg-12">
        <center>
          </center>
          </div> */}
            <div className="col-lg-6">
              <center>
                <img
                  src={require("../assets/img/chris.png")}
                  id="chris"
                  className="img-fluid"
                  alt=""
                ></img>
              </center>
            </div>

            <div className="col-lg-6">
              <div className="timeline-panel">
                <div className="intro-body">
                  <p>
                    Hey! My name is Chris, I'm a qualified advanced ESL
                    instructor with a BA and Masters degree in English
                    Literature and Creative Writing from Exeter University in
                    the UK (Top 10 universities in UK). I've spent time
                    teaching in England and India, and I'm now based in
                    Stockholm.
                  </p>
                  <p>
                    I create English courses to match the needs and interests of
                    my students, in order to make your learning as fun, personal
                    and effective as possible. I will also give advice on how
                    best to continue learning outside of the lesson, for even
                    faster progress.
                  </p>
                  <p>
                    Whether you are trying to improve your fluency and
                    confidence in conversation, practicing for exams and job
                    interviews, or are hoping to expand your vocabulary,
                    together we will assess your goals and create a step-by-step
                    program that works towards them - at your pace.
                  </p>
                  <p>
                    I’m a firm believer that the more relaxed you are, and the
                    more relevant the topics are to your life, the easier and
                    more enjoyable it is to learn. I really look forward to
                    hearing from you!
                  </p>

                  <img
                    src={require("../assets/img/tefl.png")}
                    id="tefl"
                    className="img-fluid center mx-auto"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="container"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
