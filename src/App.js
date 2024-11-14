import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        {/* slider starts  */}
        <Section />
        {/* slider ends */}
        {/* main content starts  */}
        <Hero />
        {/* main content ends  */}
        <footer className="iq-bg-dark">
          <div className="footer-top">
            <div className="container-fluid">
              <div className="row footer-standard">
                <div className="col-lg-5">
                  <div className="widget text-left">
                    <div>
                      <ul className="menu p-0">
                        <li>
                          <a href="#">Terms of Use</a>
                        </li>
                        <li>
                          <a href="#">Privacy-Policy</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                        <li>
                          <a href="#">Watch List</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget text-left">
                    <div className="textwidget">
                      <p>
                        <small>
                          This is Lorem, ipsum dolor sit amet consectetur
                          adipisicing elit. Obcaecati, quo tempore. Quasi rem
                          rerum est in nulla atque quibusdam illo. this is
                          footer and simple tsesxij is writen jkd. fsek hello
                          how are you. please like and subscribe. footer ends .
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                  <h6 className="footer-link-title">Follow Us:</h6>
                  <ul className="info-share">
                    <li>
                      <a href="#">
                        <i>
                          <fa className="fa fa-facebook" />
                        </i>
                      </a>
                      <i></i>
                    </li>
                    <i>
                      <li>
                        <a href="#">
                          <i>
                            <fa className="fa fa-youtube" />
                          </i>
                        </a>
                        <i></i>
                      </li>
                      <i>
                        <li>
                          <a href="#">
                            <i>
                              <fa className="fa fa-instagram" />
                            </i>
                          </a>
                          <i></i>
                        </li>
                        <i></i>
                      </i>
                    </i>
                  </ul>
                  <i>
                    <i>
                      <i></i>
                    </i>
                  </i>
                </div>
                <i>
                  <i>
                    <i>
                      <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <div className="widget text-left">
                          <div className="textwidget">
                            <h6 className="footer-link-title">NetFlix App</h6>
                            <div className="d-flex align-items-center">
                              <a href="#">
                                <img src="images/footer/01.jpg" alt />
                              </a>
                              <br />
                              <a href="#" className="ml-3">
                                <img src="images/footer/02.jpg" alt />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </i>
                  </i>
                </i>
              </div>
              <i>
                <i>
                  <i></i>
                </i>
              </i>
            </div>
            <i>
              <i>
                <i></i>
              </i>
            </i>
          </div>
          <i>
            <i>
              <i></i>
            </i>
          </i>
        </footer>
        <i>
          <i>
            <i></i>
          </i>
        </i>
      </div>
    </div>
  );
}

export default App;
