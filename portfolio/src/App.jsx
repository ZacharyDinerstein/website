import React from 'react';
import Navbar from './Navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <div>
      {/*<div id="root"></div>*/}
      <Navbar/>

      {/* <!-- Header --> */}
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">The web development work of Zachary Dinerstein</div>
            <div className="intro-heading text-uppercase">Welcome!</div>
          </div>
        </div>
      </header>

      {/* <!-- Portfolio Grid --> */}
      <section className="bg-light" id="portfolio">
        <div className="container">
          {/* <!-- <div className="row">
				<div className="col-lg-12 text-center">
					<h2 className="section-heading text-uppercase">Portfolio</h2>
				</div>
			</div> */}
          <div className="row portfolio-items-container">

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal10">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/honeybook/honey-book-card-app.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>React Card Search</h4>
                <p className="text-muted">HoneyBook</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal9">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/stocknewz.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>StockNewz</h4>
                <p className="text-muted">Selina</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/glamour-thumbnail-2.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Quiz Launching App</h4>
                <p className="text-muted">Glamour Magazine</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal8">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/promo-2.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Single Page Video LP</h4>
                <p className="text-muted">Promo.Com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/earthquake-crop.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Earthquakes!</h4>
                <p className="text-muted">General Assembly</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/rails-tutorial-portfolio.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Rails Portfolio Pieces</h4>
                <p className="text-muted">CodeCademy</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/the-heart-2.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Portfolio Website</h4>
                <p className="text-muted">The Heart</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/1ffc-lp.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Website Redesign</h4>
                <p className="text-muted">First Franklin Financial</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal7">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/granite.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Website Redesign</h4>
                <p className="text-muted">Granite Transformations</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src="./img/portfolio/cccs-full.png" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Website Redesign</h4>
                <p className="text-muted">Consolidated Credit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About --> */}
      {/* <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="./img/about/1.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="./img/about/2.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="./img/about/3.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2012</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="./img/about/4.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>July 2014</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Be Part
                    <br>Of Our
                    <br>Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> --> */}

      {/* <!-- Clients --> */}
      {/* <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="./img/logos/envato.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="./img/logos/designmodo.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="./img/logos/themeforest.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="./img/logos/creative-market.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section> --> */}

      {/* <!-- Contact --> */}
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Write Me</h2>
              <h3 className="section-subheading text-white">zackdinerstein@gmail.com</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
        </div>
      </section>

      {/* <!-- Portfolio Modals --> */}

      {/* <!-- Modal 1 --> */}
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">Earthquakes</h2>
                    <p className="item-intro text-muted">General Assembly Project</p>
                    <a target="_blank" rel="noopener noreferrer" href="http://zacharydinerstein.github.io/Earthquakes/">
                      <img className="img-fluid d-block mx-auto" src="./img/portfolio/earthquake-full.png"
                        alt="" />
                    </a>
                    <p>This D3.js app depicts magnitude of earthquakes that hit between 2011 and 2013,
                      including the
									earthquake that caused a tsunami near Japan in March 2011.</p>
                    <p>Built while attending General Assembly's WDI program.</p>
                    <ul className="list-inline">
                      <li>Launched: February 2014</li>
                      {/* <!-- <li>Client: General Assembly</li> --> */}
                      <li>Partners: Serge Thompson</li>
                      <li>Languages Used: D3.js</li>
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href="http://zacharydinerstein.github.io/Earthquakes/">
                      <button className="btn btn-primary" type="button">Launch Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 2 --> */}
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">Quiz Launching Web App</h2>
                    <p className="item-intro text-muted">Glamour Magazine</p>
                    <a target="_blank" rel="noopener noreferrer"
                      href="https://www.youtube.com/watch?v=v4evs27gIHc&list=UU9NJfFiEBSOGB-k7DZ-RGmw">
                      <img className="img-fluid d-block mx-auto" src="./img/portfolio/glamour-thumbnail-2.png"
                        alt="" />
                    </a>
                    <p>Built Glamour Magazine’s first Buzzfeed-style, quiz-launching web app. Designed
                      layouts and
                      implemented game logic for three different quiz types. Used Bootstrap to create
                      pixel-perfect
									responsive design, and merged app with Ember backend.</p>
                    <ul className="list-inline">
                      <li>Built: August 2014</li>
                      <li>Languages: Boostrap, Ember </li>
                      {/* <!-- <li>Client: Explore</li> --> */}
                      {/* <!-- <li>Partners: Serge Thompson</li> --> */}
                    </ul>
                    <a target="_blank" rel="noopener noreferrer"
                      href="ttps://www.youtube.com/watch?v=v4evs27gIHc&list=UU9NJfFiEBSOGB-k7DZ-RGmw">
                      <img className="img-fluid d-block mx-auto" alt="" />
                      <button className="btn btn-primary" type="button">Launch Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 3 --> */}
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">Portfolio Website</h2>
                    <p className="item-intro text-muted">The Heart</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.theheartradio.org/">
                      <img className="img-fluid d-block mx-auto" src="./img/portfolio/the-heart-2.png" alt="" />
                    </a>
                    <p>The Heart is a Peabody-Award-nominated podcast.</p>
                    <p>Collaborated with editorial staff to conceptualize and launch the show’s first site.
                      Developed simple
                      workflow instructions so client can manage their media-heavy pages independently.
								</p>
                    <ul className="list-inline">
                      <li>Built: June 2016</li>
                      <li>Created using Squarespace's development tools</li>
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.theheartradio.org/">
                      <button className="btn btn-primary" type="button">Launch Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 4 --> */}
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">Website Redesign</h2>
                    <p className="item-intro text-muted">First Franklin Financial</p>
                    <a target="_blank" rel="noopener noreferrer" href="http://landing.1ffc.com/">
                      <img className="img-fluid d-block mx-auto" src="./img/portfolio/1ffc-lp.png" alt="" />
                    </a>
                    <p>First Franklin Financial is a client of Ai Media Group, where I work as a frontend
									developer.</p>
                    <p>For this project, I built the redesigned landing page, leading to three times more
                      generated leads
                      than our target goal. Campaign became Ai Media’s gold-standard example when pitching
									new business.</p>
                    <ul className="list-inline">
                      <li>Launched: July 2018</li>
                      <li>Languages: PHP, Bootstrap, Sass, Gitlab</li>
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href="http://landing.1ffc.com/">
                      <button className="btn btn-primary" type="button">Project URL</button>
                    </a>
                    <button className="btn btn-primary btn--open-vid" type="button"
                      data-video-to-open="1ffc">Video</button>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ZacharyDinerstein/1ffc">
                      <button className="btn btn-primary" type="button">Github</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 5 --> */}
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">Website Redesign</h2>
                    <p className="item-intro text-muted">Consolidated Credit</p>
                    {/* <!-- <video src="video/ccs/cccs-full-screen.mov"></video> --> */}
                    <h4 className="portfolio__section-header">FINISHED SITE</h4>
                    <img className="img-fluid d-block mx-auto"
                      src="./img/portfolio/cccs/site-redesign/cccs-full-screen-xl.png" alt="" />
                    <div className="row">
                      <div className="col-md-8">
                        <img className="img-fluid d-block mx-auto"
                          src="./img/portfolio/cccs/site-redesign/cccs-full-screen-md.png" alt="" />
                      </div>
                      <div className="col-md-4">
                        <img className="img-fluid d-block mx-auto"
                          src="./img/portfolio/cccs/site-redesign/cccs-full-screen-sm.png" alt="" />
                      </div>
                    </div>
                    <h4 className="portfolio__section-header">ORIGINAL PAGE</h4>
                    <img className="img-fluid d-block mx-auto"
                      src="./img/portfolio/cccs/old-site/cccs-old-page-full-screen-xl.png" alt="" />
                    <div className="row">
                      <div className="col-md-8">
                        <img className="img-fluid d-block mx-auto"
                          src="./img/portfolio/cccs/old-site/cccs-old-page-full-screen-md.png" alt="" />
                      </div>
                      <div className="col-md-4">
                        <img className="img-fluid d-block mx-auto"
                          src="./img/portfolio/cccs/old-site/cccs-old-page-full-screen-sm.png" alt="" />
                      </div>
                    </div>
                    <p>Client was dissatisfied with the number of form leads their old landing page
                      generated and asked Ai
                      Media Group to redesign it. We optomized our design towards form fills, and focused
                      on a clean,
									minimal, responsive layout.</p>
                    <p>The page was created using Bootstrap, sticking closely to BEM guidelines, and
                      utilized PHP to send
                      form information to CCCS's database. Our goal was to create a pixel perfect replica
                      of the design
									specs the client approved and the end result was a hit with their team.</p>
                    <ul className="list-inline">
                      <li>Built: January 2018</li>
                      <li>Languages: PHP, Bootstrap, Sass, BEM, Gitlab</li>
                    </ul>
                    <button className="btn btn-primary btn--open-vid" type="button"
                      data-video-to-open="cccs">Video</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 6 --> */}
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">Rails Portfolio Pieces</h2>
                    <p className="item-intro text-muted">CodeCademy</p>
                    {/* <!-- <video src="video/ccs/cccs-full-screen.mov"></video> --> */}
                    <a target="_blank" rel="noopener noreferrer" href="https://sleepy-depths-39467.herokuapp.com/">
                      <img className="img-fluid d-block mx-auto"
                        src="./img/portfolio/rails-tutorial-portfolio.png" alt="" />
                    </a>
                    <p>In March 2019, I embarked on re-strengthening my Ruby on Rails knowledge. To kick off
                      the process, I
                      completed CodeCademy's full Ruby on Rails course, building each project from scratch
                      before hosting
									them on Heroku.</p>
                    <p>The following is a portfolio page I designed and built to showcase those pieces. Each
                      piece is built
                      using the Rails framework along with a postgreSQL database. Many are enhanced beyond
                      the scope of the
									CodeCademy tutorial.</p>
                    <p>Enjoy!</p>
                    <ul className="list-inline">
                      <li>Built: March 2019</li>
                      <li>Languages: Rails, Bootstrap, PostgreSQL, Sass, BEM</li>
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href="https://sleepy-depths-39467.herokuapp.com/">
                      <button className="btn btn-primary" type="button">Launch Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 7 --> */}
      <div className="portfolio-modal modal fade" id="portfolioModal7" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">Website Redesign</h2>
                    <p className="item-intro text-muted">Granite Transformtions</p>
                    <a href="https://zacharydinerstein.github.io/granite-transformations/">
                      <img className="img-fluid d-block mx-auto" src="./img/portfolio/granite.png" alt="" />
                    </a>
                    <div className="row">
                      <div className="col-xs-0 col-md-2"></div>
                      <div className="col-md-8">
                        <a href="https://zacharydinerstein.github.io/granite-transformations/">
                          <img className="img-fluid d-block mx-auto" src="./img/portfolio/granite-mobile.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <p>Granite Transformations is a long-running client of Ai Media Group, where I worked as
                      a frontend
									developer.</p>
                    <p>For this project, I built the redesigned landing page in a two-day sprint. The
                      project was handed off
                      to a collegue to finish, but what you see above are the end results of that sprint.
								</p>
                    <ul className="list-inline">
                      <li>Built: February 2019</li>
                      <li>Languages: Sass, BEM, Bootstrap, Gitlab</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal8" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">Single Page Video LP</h2>
                    <p className="item-intro text-muted">Coding Challenge</p>
                    <h4 className="portfolio__section-header">FINISHED SITE</h4>
                    {/* <!-- <video src="video/ccs/cccs-full-screen.mov"></video> --> */}
                    <a target="_blank" rel="noopener noreferrer" href="https://zacharydinerstein.github.io/Promo-Tech-Challenge/">
                      <img className="img-fluid d-block mx-auto" src="./img/portfolio/promo-2.png" alt="" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://zacharydinerstein.github.io/Promo-Tech-Challenge/">
                      <img className="img-fluid d-block mx-auto" src="./img/portfolio/promo-modal.png" alt="" />
                    </a>
                    <h4 className="portfolio__section-header">Design Sketches</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <img className="img-fluid d-block mx-auto" src="./img/portfolio/promo-mockup-1.png"
                          alt="" />
                      </div>
                      <div className="col-md-6">
                        <img className="img-fluid d-block mx-auto" src="./img/portfolio/promo-mockup-2.png"
                          alt="" />
                      </div>
                    </div>
                    <p>This is a frontend coding challenge from a burgening tech company in Tel Aviv. The
                      challenge was to
                      build a pixel-perfect rendering of the provided design with a full-screen video
                      backdrop, as well as
                      the ability to produce a modal window with click-and-drag functionality. No
                      frameworks were allowed
									(i.e., no Bootstrap).</p>
                    <p>The following page was created from scratch in under three hours.</p>
                    <ul className="list-inline">
                      <li>Built: April 2019</li>
                      <li>Languages: Sass, BEM</li>
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href="https://zacharydinerstein.github.io/Promo-Tech-Challenge/">
                      <button className="btn btn-primary" type="button">Launch Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal9" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">StockNewz</h2>
                    <p className="item-intro text-muted">Selina</p>
                    {/* <!-- <video src="video/ccs/cccs-full-screen.mov"></video> --> */}
                    <a target="_blank" rel="noopener noreferrer" href="https://whispering-anchorage-40451.herokuapp.com/">
                      <img className="img-fluid d-block mx-auto" src="./img/portfolio/stocknewz.png" alt="" />
                    </a>
                    <p>This app is the reslut of a fullstack coding challenge from Selina -- a boutique
                      co-working/co-living
                      company in Tel Aviv. The challenge was to use the Stock News Rest API to build a
                      fullstack app where
                      users can search for stock-related news by their tickers, and display that news
                      within a modal window
									within the app.</p>
                    <p>In addition, coders must create an Admin who can add a user, remove a user, and look
                      at a user's
									latest search terms</p>
                    <p></p>
                    <ul className="list-inline">
                      <li>Built: April 2019</li>
                      <li>Languages: Rails, PostgreSQL, Sass, BEM, HTTParty</li>
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href="https://whispering-anchorage-40451.herokuapp.com/">
                      <button className="btn btn-primary" type="button">Launch Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal10" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here --> */}
                    <h2 className="text-uppercase">React Card Search</h2>
                    <p className="item-intro text-muted">HoneyBook</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://zacharydinerstein.github.io/challenge--honeybook-react-app/">
                      <img className="img-fluid d-block mx-auto" src="./img/portfolio/honeybook/honey-book-card-app.png" alt="" />
                    </a>
                    <p>This app is the reslut of a front end coding challenge from HoneyBook -- a content management company for small businesses,
										located in Tel Aviv. </p>
                    <p>Challenge: Use the company's API to build a responsive
										React app where users can search profiles based on any criteria.</p>
                    <p>Layout should be pixel perfect and render beautifully despite variations in user profiles.</p>
                    <ul className="list-inline">
                      <li>Built: April 2019</li>
                      <li>Languages: React, Sass, BEM, Bootstrap</li>
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href="https://zacharydinerstein.github.io/challenge--honeybook-react-app/">
                      <button className="btn btn-primary" type="button">Launch Project</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="lightbox-1ffc" className="lightbox">
        <video id="demo-video-1ffc" controls>
          <source src="video/1ffc/1ffc.mp4" type="video/mp4"></source>
          <source src="video/1ffc/1ffc.mov" type="video/mov"></source>
            Your browser does not support the video tag.
        </video>
      </div>
      <div id="lightbox-cccs" className="lightbox">
        <video id="demo-video-cccs" controls>
          <source src="video/cccs/cccs.mp4" type="video/mp4"></source>
          <source src="video/cccs/cccs.mov" type="video/mov"></source>
            Your browser does not support the video tag.
        </video>
      </div>

    </div>    
  );
}
          
export default App;
