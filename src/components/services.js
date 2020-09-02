import React from "react";

export default class Services extends React.Component {
  render() {
    return (
      <div className="page-section" id="services">
        <center>
          <h1 id="services_title" className="section-heading text-uppercase">
            SERVICES
          </h1>
        </center>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6" id="service_intro">
                <ul>
                  <li className="service-points">
                    Personalised ESL (English as a Second Language) tuition for
                    all abilities age 16+.
                  </li>
                  <li className="service-points">Group courses up to 4 people €20p/h.</li>
                  <li className="service-points">All course prices include an assessment of your English level and a one-to-one conversation so we can discuss your aims.</li>
                  <li className="service-points">
                    Preparation for exams, interviews, or just everyday life.
                  </li>
                  <li className="service-points">
                    I offer proof reading services for university
                    undergraduates, specialising in literature and art. Contact
                    me for enquires and prices.
                  </li>
                  <li className="service-points">Additionally, I am available for one-on-one tutoring for English students studying GCSE’s, A Levels and equivalent. Whether you require help with coursework, exam preparation, or simply want to get ahead of the rest of your class, we can work together to achieve your goals.</li>
                </ul>
            </div>
            <div className="col-lg-6">
              <img
                src={require("../assets/img/officehome.jpg")}
                id="officepic"
                className="img-fluid"
                alt=""
              ></img>
            </div>
            </div>
            <div className="col-lg-12" id="service-stuff">
            <p>
                  Below is a course I designed with one of my regular students.
                  She is a Swedish Iranian who was hoping to improve her
                  conversation skills so she could communicate more comfortably
                  with her English son-in-law. So we discussed her interests,
                  subjects that excite her, and the activities she does on a
                  regular basis. I then included these topics in her learning
                  over a 10 week lesson plan. We would go through exercises
                  together in our lessons, and I would then set her some work to
                  do in between classes to further develop the skills we had
                  practiced during our time together.
                </p>
                       <div className="row" id="#table">
              <table class="table table-light">
                <tbody>
                  <tr>
                    <th>Lesson 1</th>
                    <td>Food and flavour - Adjectives.</td>
                  </tr>
                  <tr>
                    <th>Lesson 2</th>
                    <td>Food and flavour - Comparative adjectives.</td>
                  </tr>
                  <tr>
                    <th>Lesson 3</th>
                    <td>
                      Family members and friends - verb 'to have' in past,
                      present and future tense.
                    </td>
                  </tr>
                  <tr>
                    <th>Lesson 4</th>
                    <td>
                      Family members and friends - comparing personality traits
                      and looks.
                    </td>
                  </tr>
                  <tr>
                    <th>Lesson 5</th>
                    <td>
                      Modal Verbs related to lesson 3. Must, can, could, shall,
                      should, might.
                    </td>
                  </tr>
                  <tr>
                    <th>Lesson 6</th>
                    <td>
                      Listening skills. Various exercises to develop listening
                      skills, using the topics already covered.
                    </td>
                  </tr>
                  <tr>
                    <th>Lesson 7</th>
                    <td>
                      Workplace vocabulary. Where do you work, why? Do you
                      prefer it to other jobs you have had? (Using comparative
                      adjectives from lesson 2).
                    </td>
                  </tr>
                  <tr>
                    <th>Lesson 8</th>
                    <td>
                      Technology. What technology do you use, why do you find it
                      useful? Is it always a good thing?
                    </td>
                  </tr>
                  <tr>
                    <th>Lesson 9</th>
                    <td>
                      Day out in the mall. Describe activities one might do in
                      various stores, express preference for particular shops.
                    </td>
                  </tr>
                  <tr>
                    <th>Lesson 10</th>
                    <td>
                      Going on holiday! Describing activities, food, and people
                      you would spend time with.
                    </td>
                  </tr>
                </tbody>
              </table>
              </div> 
              </div>
        </div>
      </div>
    );
  }
}
