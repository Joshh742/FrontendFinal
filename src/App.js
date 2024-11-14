import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        {/* slider starts  */}
        <section id="home" className="iq-main-slider p-0">
          <div id="home-slider" className="slider m-0 p-0">
            <div className="slide slick-bg s-bg-1">
              <div className="container-fluid position-relative h-100">
                <div className="slider-inner h-100">
                  <div className="row align-items-center h--100">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                      <a href="javascript:void(0)">
                        <div
                          className="channel-logo"
                          data-animation-in="fadeInLeft"
                          data-delay-in="0.5"
                        >
                          <img src="images/logo.png" className="c-logo" alt />
                        </div>
                      </a>
                      <h1
                        className="slider-text big-title title text-uppercase"
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.6"
                      >
                        Avengers
                      </h1>
                      <div
                        className="d-flex flex-wrap align-items-center fadeInLeft animated"
                        data-animation-in="fadeInLeft"
                        style={{ opacity: 1 }}
                      >
                        <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                          <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star-half" />
                            </li>
                          </ul>
                          <span className="text-white ml-2">7.3(imbd)</span>
                        </div>
                        <div className="d-flex align-items-center mt-2 mt-md-3">
                          <span className="badge badge-secondary p-2">16+</span>
                          <span className="ml-3">2h 21min</span>
                        </div>
                      </div>
                      <p data-animation-in="fadeInUp">
                        When Tony Stark and Bruce Banner try to jump-start a
                        dormant peacekeeping program called Ultron, things go
                        horribly wrong and it's up to Earth's nightest heroes to
                        stop the villainous Ultron from enacting his terrible
                        plan.
                      </p>
                      <div
                        className="trending-list"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <div className="text-primary title starring">
                          Starring :
                          <span className="text-body">
                            Robert Downey Jr., Chris Evans, Mark Ruffalo
                          </span>
                        </div>
                        <div className="text-primary title genres">
                          Genres : <span className="text-body">Action</span>
                        </div>
                        <div className="text-primary title tag">
                          Tags :
                          <span className="text-body">
                            Action, Adventure, Horror
                          </span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center r-mb-23 mt-4"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <a href="#" className="btn btn-hover iq-button">
                          <i className="fa fa-play mr-3" />
                          Play Now
                        </a>
                        <a href="#" className="btn btn-link">
                          More Details
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-12 col-md-12 trailor-video">
                    <a href="video/trailer.mp4" className="video-open playbtn">
                      <img src="images/play.png" className="play" alt />
                      <span className="w-trailor">Watch Trailer</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slick-bg s-bg-2">
              <div className="container-fluid position-relative h-100">
                <div className="slider-inner h-100">
                  <div className="row align-items-center h--100">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                      <a href="javascript:void(0)">
                        <div
                          className="channel-logo"
                          data-animation-in="fadeInLeft"
                          data-delay-in="0.5"
                        >
                          <img src="images/logo.png" className="c-logo" alt />
                        </div>
                      </a>
                      <h1
                        className="slider-text big-title title text-uppercase"
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.6"
                      >
                        Frozen
                      </h1>
                      <div
                        className="d-flex flex-wrap align-items-center fadeInLeft animated"
                        data-animation-in="fadeInLeft"
                        style={{ opacity: 1 }}
                      >
                        <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                          <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star-half" />
                            </li>
                          </ul>
                          <span className="text-white ml-2">7.4(imbd)</span>
                        </div>
                        <div className="d-flex align-items-center mt-2 mt-md-3">
                          <span className="badge badge-secondary p-2">13+</span>
                          <span className="ml-3">1h 42min</span>
                        </div>
                      </div>
                      <p data-animation-in="fadeInUp">
                        When the newly crowned Queen Elsa accidentally uses her
                        power to turn things into ice to curse her home in
                        infinte winter, her sister Anna teams up with a mountain
                        man, his playful reindeer, and a snowman to change the
                        weather condition.
                      </p>
                      <div
                        className="trending-list"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <div className="text-primary title starring">
                          Starring :
                          <span className="text-body">
                            Kristan Bell, Idina menzel, Jonathan Groff
                          </span>
                        </div>
                        <div className="text-primary title genres">
                          Genres : <span className="text-body">Animation</span>
                        </div>
                        <div className="text-primary title tag">
                          Tags :
                          <span className="text-body">
                            Animation, Adventure, Comedy
                          </span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center r-mb-23 mt-4"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <a href="#" className="btn btn-hover iq-button">
                          <i className="fa fa-play mr-3" />
                          Play Now
                        </a>
                        <a href="#" className="btn btn-link">
                          More Details
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-12 col-md-12 trailor-video">
                    <a href="video/trailer.mp4" className="video-open playbtn">
                      <img src="images/play.png" className="play" alt />
                      <span className="w-trailor">Watch Trailer</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slick-bg s-bg-3">
              <div className="container-fluid position-relative h-100">
                <div className="slider-inner h-100">
                  <div className="row align-items-center h--100">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                      <a href="javascript:void(0)">
                        <div
                          className="channel-logo"
                          data-animation-in="fadeInLeft"
                          data-delay-in="0.5"
                        >
                          <img src="images/logo.png" className="c-logo" alt />
                        </div>
                      </a>
                      <h1
                        className="slider-text big-title title text-uppercase"
                        data-animation-in="fadeInLeft"
                        data-delay-in="0.6"
                      >
                        The Conjuring
                      </h1>
                      <div
                        className="d-flex flex-wrap align-items-center fadeInLeft animated"
                        data-animation-in="fadeInLeft"
                        style={{ opacity: 1 }}
                      >
                        <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                          <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star-half" />
                            </li>
                          </ul>
                          <span className="text-white ml-2">7.5(imbd)</span>
                        </div>
                        <div className="d-flex align-items-center mt-2 mt-md-3">
                          <span className="badge badge-secondary p-2">16+</span>
                          <span className="ml-3">1h 52min</span>
                        </div>
                      </div>
                      <p data-animation-in="fadeInUp">
                        Paranomal investigators Ed and Lorraine Warren work to
                        help a family terrorized by a dark presence in their
                        farmhouse.
                      </p>
                      <div
                        className="trending-list"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <div className="text-primary title starring">
                          Starring :
                          <span className="text-body">
                            Patrick Wilson, Vera Farminga, Ron Livingston
                          </span>
                        </div>
                        <div className="text-primary title genres">
                          Genres : <span className="text-body">Horror</span>
                        </div>
                        <div className="text-primary title tag">
                          Tags :
                          <span className="text-body">
                            Horror, Mystery, Thriller
                          </span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center r-mb-23 mt-4"
                        data-animation-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <a href="#" className="btn btn-hover iq-button">
                          <i className="fa fa-play mr-3" />
                          Play Now
                        </a>
                        <a href="#" className="btn btn-link">
                          More Details
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-12 col-md-12 trailor-video">
                    <a href="video/trailer.mp4" className="video-open playbtn">
                      <img src="images/play.png" className="play" alt />
                      <span className="w-trailor">Watch Trailer</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* slider ends */}
        {/* main content starts  */}
        <div className="main-content">
          {/* favorite section starts   */}
          <section id="iq-favorites">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 overflow-hidden">
                  <div className="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 className="main-title">Top Picks For You</h4>
                    <a href="#" className="iq-view-all">
                      View All
                    </a>
                  </div>
                  <div className="favorite-contens">
                    <ul className="favorites-slider list-inline row p-0 mb-0">
                      {/* slide item 1 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/favorite/f1.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Insidious </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                16+
                              </div>
                              <span className="text-white">1h 43min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 2 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/favorite/f2.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> War </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                12+
                              </div>
                              <span className="text-white">2h 34min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">58+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 3 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/favorite/f3.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Five Feet Apart </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                18+
                              </div>
                              <span className="text-white">2h 57min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 4 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/favorite/f4.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Chhichore </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                10+
                              </div>
                              <span className="text-white">2h 23min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 5 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/favorite/f5.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Doctor Strange </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                12+
                              </div>
                              <span className="text-white">1h 55min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* favourite section ends */}
          {/* upcoming contents section starts  */}
          <section id="iq-upcoming-movie">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 overflow-hidden">
                  <div className="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 className="main-title">Popular Movies</h4>
                    <a href="#" className="iq-view-all">
                      View All
                    </a>
                  </div>
                  <div className="favorite-contens">
                    <ul className="favorites-slider list-inline row p-0 mb-0">
                      {/* slide item 1 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/popular/u1.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Mulan </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                10+
                              </div>
                              <span className="text-white">2h</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">89+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 2 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/popular/u2.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Laxmii </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                18+
                              </div>
                              <span className="text-white">2h 21min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">35+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 3 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/popular/u3.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Captain America </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                12+
                              </div>
                              <span className="text-white">2h 4min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">99+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 4 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/popular/u4.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Life of Pie </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                11+
                              </div>
                              <span className="text-white">2h 7min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 5 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/popular/u5.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Mission Mangal </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                12+
                              </div>
                              <span className="text-white">2h 10min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* upcoming contents section ends */}
          {/* top ten trending  */}
          <section id="iq-topten">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 overflow-hidden">
                  <div className="topten-contents">
                    <h4 className="main-title iq-title topten-title">
                      Trending Movies
                    </h4>
                    <ul
                      id="top-ten-slider"
                      className="list-inline p-0 m-0 d-flex align-items-center"
                    >
                      <li className="slick-bg">
                        <a href="#">
                          <img
                            src="images/top-10/01.jpg"
                            className="img-fluid w-100"
                            alt
                          />
                        </a>
                        <h6 className="iq-title">
                          <a href="#" />
                          <a href="#">Harry Potter</a>
                        </h6>
                      </li>
                      <li className="slick-bg">
                        <a href="#">
                          <img
                            src="images/top-10/02.jpg"
                            className="img-fluid w-100"
                            alt
                          />
                        </a>
                        <h6 className="iq-title">
                          <a href="#"></a>
                          <a href="#">The Queen's Gambit</a>
                        </h6>
                      </li>
                      <li className="slick-bg">
                        <a href="#">
                          <img
                            src="images/top-10/03.jpg"
                            className="img-fluid w-100"
                            alt
                          />
                        </a>
                        <h6 className="iq-title">
                          <a href="#" />
                          <a href="#">Scam 1992</a>
                        </h6>
                      </li>
                      <li className="slick-bg">
                        <a href="#">
                          <img
                            src="images/top-10/04.jpg"
                            className="img-fluid w-100"
                            alt
                          />
                        </a>
                        <h6 className="iq-title">
                          <a href="#" />
                          <a href="#">Stranger Things</a>
                        </h6>
                      </li>
                      <li className="slick-bg">
                        <a href="#">
                          <img
                            src="images/top-10/05.jpg"
                            className="img-fluid w-100"
                            alt
                          />
                        </a>
                        <h6 className="iq-title">
                          <a href="#" />
                          <a href="#">BoJack Horsemen</a>
                        </h6>
                      </li>
                      <li className="slick-bg">
                        <a href="#">
                          <img
                            src="images/top-10/06.jpg"
                            className="img-fluid w-100"
                            alt
                          />
                        </a>
                        <h6 className="iq-title">
                          <a href="#" />
                          <a href="#">Peaky Blinders</a>
                        </h6>
                      </li>
                    </ul>
                    <div className="vertical_s">
                      <ul
                        id="top-ten-slider-nav"
                        className="list-inline p-0 m-0 d-flex align-items-center"
                      >
                        <li>
                          <div className="block-images position-relative">
                            <a href="#">
                              <img
                                src="images/top-10/01.jpg"
                                className="img-fluid w-100"
                                alt
                              />
                            </a>
                            <div className="block-description">
                              <h5>Harry Potter</h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <div className="badge badge-secondary p-1 mr-2">
                                  10+
                                </div>
                                <span className="text-white">8 Parts</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="#"
                                  className="btn btn-hover"
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  />
                                  Play Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="block-images position-relative">
                            <a href="#">
                              <img
                                src="images/top-10/02.jpg"
                                className="img-fluid w-100"
                                alt
                              />
                            </a>
                            <div className="block-description">
                              <h5>The Queen's Gambit</h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <div className="badge badge-secondary p-1 mr-2">
                                  18+
                                </div>
                                <span className="text-white">1 Season</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="#"
                                  className="btn btn-hover"
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  />
                                  Play Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="block-images position-relative">
                            <a href="#">
                              <img
                                src="images/top-10/03.jpg"
                                className="img-fluid w-100"
                                alt
                              />
                            </a>
                            <div className="block-description">
                              <h5>Scam 1992</h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <div className="badge badge-secondary p-1 mr-2">
                                  12+
                                </div>
                                <span className="text-white">1 Season</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="#"
                                  className="btn btn-hover"
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  />
                                  Play Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="block-images position-relative">
                            <a href="#">
                              <img
                                src="images/top-10/04.jpg"
                                className="img-fluid w-100"
                                alt
                              />
                            </a>
                            <div className="block-description">
                              <h5>Stranger Things</h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <div className="badge badge-secondary p-1 mr-2">
                                  16+
                                </div>
                                <span className="text-white">3 Season</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="#"
                                  className="btn btn-hover"
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  />
                                  Play Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="block-images position-relative">
                            <a href="#">
                              <img
                                src="images/top-10/05.jpg"
                                className="img-fluid w-100"
                                alt
                              />
                            </a>
                            <div className="block-description">
                              <h5>BoJack Horseman</h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <div className="badge badge-secondary p-1 mr-2">
                                  15+
                                </div>
                                <span className="text-white">6 Season</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="#"
                                  className="btn btn-hover"
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  />
                                  Play Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="block-images position-relative">
                            <a href="#">
                              <img
                                src="images/top-10/06.jpg"
                                className="img-fluid w-100"
                                alt
                              />
                            </a>
                            <div className="block-description">
                              <h5>Peaky Blinders</h5>
                              <div className="movie-time d-flex align-items-center my-2">
                                <div className="badge badge-secondary p-1 mr-2">
                                  20+
                                </div>
                                <span className="text-white">5 Season</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="#"
                                  className="btn btn-hover"
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  />
                                  Play Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="iq-suggested" className="s-margin">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 overflow-hidden">
                  <div className="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 className="main-title">Suggested Sports</h4>
                    <a href="#" className="iq-view-all">
                      View All
                    </a>
                  </div>
                  <div className="favorite-contens">
                    <ul className="favorites-slider list-inline row p-0 mb-0">
                      {/* slide item 1 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/suggested/01.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Basketball </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                NBA
                              </div>
                              <span className="text-white">SPorts</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">89+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 2 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/suggested/02.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> VolleyBall </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                PRO
                              </div>
                              <span className="text-white">Sports</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">35+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 3 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/suggested/03.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Basketball </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                LSU
                              </div>
                              <span className="text-white">Sports</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">99+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 4 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/suggested/04.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Cricket </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                T-20
                              </div>
                              <span className="text-white">Sports</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 5 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/suggested/05.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Golf </a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                PGA
                              </div>
                              <span className="text-white">Sports</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* parallax section  */}
          <section id="parallex" className="parallax-window">
            <div className="container-fluid h-100">
              <div className="row align-items-center justify-content-center h-100 parallaxt-details">
                <div className="col-lg-4 r-mb-23">
                  <div className="text-left">
                    <a href="javascript:void(0)">
                      <h1 className="parallax-heading">Avatar</h1>
                    </a>
                    <div className="parallax-ratting d-flex align-items-center mt-3 mb-3">
                      <ul className="ratting-start p-o m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                        <li>
                          <a href="#" className="text-primary">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-primary">
                            <i className="pl-2 fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-primary">
                            <i className="pl-2 fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-primary">
                            <i className="pl-2 fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-primary">
                            <i className="pl-2 fa fa-star-half-o" />
                          </a>
                        </li>
                      </ul>
                      <span className="text-white ml-3">7.8(Imbd)</span>
                    </div>
                    <div className="movie-time d-flex align-items-center mb-3">
                      <div className="badge badge-secondary p-1 mr-2">9+</div>
                      <span className="text-white">2h 42min</span>
                    </div>
                    <p>
                      A paraplegic Marine dispatched to the moon Pandora on a
                      unique mission becomes torn between following his orders
                      and protecting the world he feels is his home.
                    </p>
                    <div className="parallax-buttons">
                      <a href="#" className="btn btn-hover">
                        Play Now
                      </a>
                      <a href="#" className="btn btn-link">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="parallax-img">
                    <a href="#">
                      <img
                        src="images/parallax/avatar.jpg"
                        alt
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* trending section  */}
          <section id="iq-trending" className="s-margin">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 overflow-hidden">
                  <div className="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 className="main-title">Trending</h4>
                  </div>
                  <div className="trending-contens">
                    <ul
                      id="trending-slider-nav"
                      className="list-inline p-0 mb-0 row align-items-center"
                    >
                      <li>
                        <a href="javascript:void(0);">
                          <div className="movie-slick position-relative">
                            <img
                              src="images/trending/01.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <div className="movie-slick position-relative">
                            <img
                              src="images/trending/02.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <div className="movie-slick position-relative">
                            <img
                              src="images/trending/03.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <div className="movie-slick position-relative">
                            <img
                              src="images/trending/04.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <div className="movie-slick position-relative">
                            <img
                              src="images/trending/05.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <div className="movie-slick position-relative">
                            <img
                              src="images/trending/06.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </a>
                      </li>
                    </ul>
                    <ul
                      id="trending-slider"
                      className="list-inline p-0 m-0 d-flex align-items-center"
                    >
                      <li>
                        <div
                          className="tranding-block position-relative"
                          style={{
                            backgroundImage: "url(images/trending/01.jpg)",
                          }}
                        >
                          <div className="trending-custom-tab">
                            <div className="tab-title-info position-relative">
                              <ul
                                className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                role="tablist"
                              >
                                <li className="nav-item">
                                  <a
                                    href="#trending-data1"
                                    className="nav-link active show"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="true"
                                  >
                                    Overview
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data2"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Episodes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data3"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Trailers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data4"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Similiar Like This
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="trending-content">
                              <div
                                id="trending-data1"
                                className="overview-tab tab-pane fade active show"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="javascript:void(0);" tabIndex={0}>
                                    <div className="res-logo">
                                      <div className="channel-logo">
                                        <img
                                          src="images/logo.png"
                                          className="c-logo"
                                          alt
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    The Crown
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail">
                                    <span className="badge badge-secondary p-3">
                                      18+
                                    </span>
                                    <span className="ml-3">3 Seasons</span>
                                    <span className="trending-year">2020</span>
                                  </div>
                                  <div className="d-flex align-items-center series mb-4">
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/trending/trending-label.png"
                                        className="img-fluid"
                                        alt
                                      />
                                    </a>
                                    <span className="text-gold ml-3">
                                      #2 in Series Today
                                    </span>
                                  </div>
                                  <p className="trending-dec">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Ex facere sapiente optio
                                    dolor aperiam impedit sint molestiae
                                    delectus, qui magni 1500 thid had that.
                                  </p>
                                  <div className="p-btns">
                                    <div className="d-flex align-items-center p-0">
                                      <a
                                        href="#"
                                        className="btn btn-hover mr-2"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-play mr-2" />
                                        Play Now
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-link"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-plus pr-2" />
                                        My List
                                      </a>
                                    </div>
                                  </div>
                                  <div className="trending-list mt-4">
                                    <div className="text-primary title">
                                      Starring :
                                      <span className="text-body">
                                        Clarie Foy, Olivia Colman, Imelda
                                        Staunton
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Genres :
                                      <span className="text-body">
                                        Biography
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Creators :
                                      <span className="text-body">
                                        Peter Morgan
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data2"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    the Crown
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail mb-4">
                                    <span className="season_date">
                                      2 Seasons
                                    </span>
                                    <span className="trending-year">
                                      Feb 2019
                                    </span>
                                  </div>
                                  <div className="iq-custom-select d-inline-block sea-epi">
                                    <select
                                      name="Seasons"
                                      className="form-control season-select"
                                    >
                                      <option value="Season1">Season 1</option>
                                      <option value="Season2">Season 2</option>
                                      <option value="Season3">Season 3</option>
                                      <option value="Season4">Season 4</option>
                                      <option value="Season4">Season 4</option>
                                      <option value="Season6">Season 6</option>
                                    </select>
                                  </div>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data3"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    the crown
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data4"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    the Crown
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="tranding-block position-relative"
                          style={{
                            backgroundImage: "url(images/trending/02.jpg)",
                          }}
                        >
                          <div className="trending-custom-tab">
                            <div className="tab-title-info position-relative">
                              <ul
                                className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                role="tablist"
                              >
                                <li className="nav-item">
                                  <a
                                    href="#trending-data5"
                                    className="nav-link active show"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="true"
                                  >
                                    Overview
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data6"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Episodes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data7"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Trailers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data8"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Similiar Like This
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="trending-content">
                              <div
                                id="trending-data5"
                                className="overview-tab tab-pane fade active show"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="javascript:void(0);" tabIndex={0}>
                                    <div className="res-logo">
                                      <div className="channel-logo">
                                        <img
                                          src="images/logo.png"
                                          className="c-logo"
                                          alt
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Big Bang Theory
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail">
                                    <span className="badge badge-secondary p-3">
                                      15+
                                    </span>
                                    <span className="ml-3">2 Seasons</span>
                                    <span className="trending-year">2020</span>
                                  </div>
                                  <div className="d-flex align-items-center series mb-4">
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/trending/trending-label.png"
                                        className="img-fluid"
                                        alt
                                      />
                                    </a>
                                    <span className="text-gold ml-3">
                                      #3 in Series Today
                                    </span>
                                  </div>
                                  <p className="trending-dec">
                                    A woman who moves into an appartment across
                                    the hall from two brilliant but social
                                    awkward physicists shows then how little
                                    they know about life outside of the
                                    laboratory.
                                  </p>
                                  <div className="p-btns">
                                    <div className="d-flex align-items-center p-0">
                                      <a
                                        href="#"
                                        className="btn btn-hover mr-2"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-play mr-2" />
                                        Play Now
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-link"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-plus pr-2" />
                                        My List
                                      </a>
                                    </div>
                                  </div>
                                  <div className="trending-list mt-4">
                                    <div className="text-primary title">
                                      Starring :
                                      <span className="text-body">
                                        Jhonny Galecki, Jim Parsons , Kaley
                                        Cuoco
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Genres :
                                      <span className="text-body">
                                        Comedy Romance
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Creators :
                                      <span className="text-body">
                                        Chuck Lorre, Bill Prady
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data6"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Big Bang Theory
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail mb-4">
                                    <span className="season_date">
                                      12 Seasons
                                    </span>
                                    <span className="trending-year">
                                      Feb 2019
                                    </span>
                                  </div>
                                  <div className="iq-custom-select d-inline-block sea-epi">
                                    <select
                                      name="Seasons"
                                      className="form-control season-select"
                                    >
                                      <option value="Season1">Season 1</option>
                                      <option value="Season2">Season 2</option>
                                      <option value="Season3">Season 3</option>
                                      <option value="Season4">Season 4</option>
                                      <option value="Season5">Season 5</option>
                                      <option value="Season6">Season 6</option>
                                      <option value="Season7">Season 7</option>
                                      <option value="Season8">Season 8</option>
                                      <option value="Season9">Season 9</option>
                                      <option value="Season10">
                                        Season 10
                                      </option>
                                      <option value="Season11">
                                        Season 11
                                      </option>
                                      <option value="Season12">
                                        Season 12
                                      </option>
                                    </select>
                                  </div>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data7"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Big Bang Theory
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data8"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Big Bang Theory
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/ce3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="tranding-block position-relative"
                          style={{
                            backgroundImage: "url(images/trending/03.jpg)",
                          }}
                        >
                          <div className="trending-custom-tab">
                            <div className="tab-title-info position-relative">
                              <ul
                                className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                role="tablist"
                              >
                                <li className="nav-item">
                                  <a
                                    href="#trending-data9"
                                    className="nav-link active show"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="true"
                                  >
                                    Overview
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data10"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Episodes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data11"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Trailers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data12"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Similiar Like This
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="trending-content">
                              <div
                                id="trending-data9"
                                className="overview-tab tab-pane fade active show"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="javascript:void(0);" tabIndex={0}>
                                    <div className="res-logo">
                                      <div className="channel-logo">
                                        <img
                                          src="images/logo.png"
                                          className="c-logo"
                                          alt
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Peaky Blinders
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail">
                                    <span className="badge badge-secondary p-3">
                                      11+
                                    </span>
                                    <span className="ml-3">3 Seasons</span>
                                    <span className="trending-year">2020</span>
                                  </div>
                                  <div className="d-flex align-items-center series mb-4">
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/trending/trending-label.png"
                                        className="img-fluid"
                                        alt
                                      />
                                    </a>
                                    <span className="text-gold ml-3">
                                      #5 in Series Today
                                    </span>
                                  </div>
                                  <p className="trending-dec">
                                    A gangster family epic set in 1990s England,
                                    centering on a gang who sew razor blades in
                                    the peaks of their caps, and their fierce
                                    boss Tommy Shelby.
                                  </p>
                                  <div className="p-btns">
                                    <div className="d-flex align-items-center p-0">
                                      <a
                                        href="#"
                                        className="btn btn-hover mr-2"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-play mr-2" />
                                        Play Now
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-link"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-plus pr-2" />
                                        My List
                                      </a>
                                    </div>
                                  </div>
                                  <div className="trending-list mt-4">
                                    <div className="text-primary title">
                                      Starring :
                                      <span className="text-body">
                                        Cillian Murphy, Paul Anderson, Helen
                                        McCrory
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Genres :
                                      <span className="text-body">
                                        Crime, Drama
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Creators :
                                      <span className="text-body">
                                        Steven Knight
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data10"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Peaky Blinders
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail mb-4">
                                    <span className="season_date">
                                      2 Seasons
                                    </span>
                                    <span className="trending-year">
                                      Feb 2019
                                    </span>
                                  </div>
                                  <div className="iq-custom-select d-inline-block sea-epi">
                                    <select
                                      name="Seasons"
                                      className="form-control season-select"
                                    >
                                      <option value="Season1">Season 1</option>
                                      <option value="Season2">Season 2</option>
                                      <option value="Season3">Season 3</option>
                                      <option value="Season4">Season 4</option>
                                      <option value="Season4">Season 4</option>
                                      <option value="Season6">Season 6</option>
                                    </select>
                                  </div>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data11"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Peaky Blinders
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data12"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Peaky Blinders
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="tranding-block position-relative"
                          style={{
                            backgroundImage: "url(images/trending/04.jpg)",
                          }}
                        >
                          <div className="trending-custom-tab">
                            <div className="tab-title-info position-relative">
                              <ul
                                className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                role="tablist"
                              >
                                <li className="nav-item">
                                  <a
                                    href="#trending-data13"
                                    className="nav-link active show"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="true"
                                  >
                                    Overview
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data14"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Episodes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data15"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Trailers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data16"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Similiar Like This
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="trending-content">
                              <div
                                id="trending-data13"
                                className="overview-tab tab-pane fade active show"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="javascript:void(0);" tabIndex={0}>
                                    <div className="res-logo">
                                      <div className="channel-logo">
                                        <img
                                          src="images/logo.png"
                                          className="c-logo"
                                          alt
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Narcos
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail">
                                    <span className="badge badge-secondary p-3">
                                      18+
                                    </span>
                                    <span className="ml-3">3 Seasons</span>
                                    <span className="trending-year">2015</span>
                                  </div>
                                  <div className="d-flex align-items-center series mb-4">
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/trending/trending-label.png"
                                        className="img-fluid"
                                        alt
                                      />
                                    </a>
                                    <span className="text-gold ml-3">
                                      #21 in Series Today
                                    </span>
                                  </div>
                                  <p className="trending-dec">
                                    A chronicled look at the criminal exploits
                                    of Colombian drug lord Pablo Escobar, as
                                    well as the many other drug kingpins who
                                    plagued the country through the years.
                                  </p>
                                  <div className="p-btns">
                                    <div className="d-flex align-items-center p-0">
                                      <a
                                        href="#"
                                        className="btn btn-hover mr-2"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-play mr-2" />
                                        Play Now
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-link"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-plus pr-2" />
                                        My List
                                      </a>
                                    </div>
                                  </div>
                                  <div className="trending-list mt-4">
                                    <div className="text-primary title">
                                      Starring :
                                      <span className="text-body">
                                        Pedro Pascal, Wagner Moura, Boyd
                                        Holbrook
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Genres :
                                      <span className="text-body">
                                        Biography, Crime, Drama
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Creators :
                                      <span className="text-body">
                                        Carlo Bernard, Chris Brancato, Doug Miro
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data14"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Narcos
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail mb-4">
                                    <span className="season_date">
                                      2 Seasons
                                    </span>
                                    <span className="trending-year">
                                      Feb 2019
                                    </span>
                                  </div>
                                  <div className="iq-custom-select d-inline-block sea-epi">
                                    <select
                                      name="Seasons"
                                      className="form-control season-select"
                                    >
                                      <option value="Season1">Season 1</option>
                                      <option value="Season2">Season 2</option>
                                      <option value="Season3">Season 3</option>
                                      <option value="Season4">Season 4</option>
                                      <option value="Season4">Season 4</option>
                                      <option value="Season6">Season 6</option>
                                    </select>
                                  </div>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n2.png"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data15"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Narcos
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n2.png"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data16"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Narcos
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="tranding-block position-relative"
                          style={{
                            backgroundImage: "url(images/trending/05.jpg)",
                          }}
                        >
                          <div className="trending-custom-tab">
                            <div className="tab-title-info position-relative">
                              <ul
                                className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                role="tablist"
                              >
                                <li className="nav-item">
                                  <a
                                    href="#trending-data17"
                                    className="nav-link active show"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="true"
                                  >
                                    Overview
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data18"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Episodes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data19"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Trailers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data20"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Similiar Like This
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="trending-content">
                              <div
                                id="trending-data17"
                                className="overview-tab tab-pane fade active show"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="javascript:void(0);" tabIndex={0}>
                                    <div className="res-logo">
                                      <div className="channel-logo">
                                        <img
                                          src="images/logo.png"
                                          className="c-logo"
                                          alt
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    FRIENDS
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail">
                                    <span className="badge badge-secondary p-3">
                                      7+
                                    </span>
                                    <span className="ml-3">10 Seasons</span>
                                    <span className="trending-year">
                                      1994 - 2004
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center series mb-4">
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/trending/trending-label.png"
                                        className="img-fluid"
                                        alt
                                      />
                                    </a>
                                    <span className="text-gold ml-3">
                                      #6 in Series Today
                                    </span>
                                  </div>
                                  <p className="trending-dec">
                                    Follows the personal and professional lives
                                    of six twenty to thirty-something-year-old
                                    friends living in Manhattan.
                                  </p>
                                  <div className="p-btns">
                                    <div className="d-flex align-items-center p-0">
                                      <a
                                        href="#"
                                        className="btn btn-hover mr-2"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-play mr-2" />
                                        Play Now
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-link"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-plus pr-2" />
                                        My List
                                      </a>
                                    </div>
                                  </div>
                                  <div className="trending-list mt-4">
                                    <div className="text-primary title">
                                      Starring :
                                      <span className="text-body">
                                        Jennifer Aniston, Courteney Cox, Lisa
                                        Kudrow
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Genres :
                                      <span className="text-body">
                                        Comedy , Romance
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Creators :
                                      <span className="text-body">
                                        David Crane, Marta Kauffman
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data18"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    FRIENDS
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail mb-4">
                                    <span className="season_date">
                                      10 Seasons
                                    </span>
                                    <span className="trending-year">
                                      Feb 2019
                                    </span>
                                  </div>
                                  <div className="iq-custom-select d-inline-block sea-epi">
                                    <select
                                      name="Seasons"
                                      className="form-control season-select"
                                    >
                                      <option value="Season1">Season 1</option>
                                      <option value="Season2">Season 2</option>
                                      <option value="Season3">Season 3</option>
                                      <option value="Season4">Season 4</option>
                                      <option value="Season4">Season 4</option>
                                      <option value="Season6">Season 6</option>
                                    </select>
                                  </div>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data19"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    FRIENDS
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data20"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    FRIENDS
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="tranding-block position-relative"
                          style={{
                            backgroundImage: "url(images/trending/06.jpg)",
                          }}
                        >
                          <div className="trending-custom-tab">
                            <div className="tab-title-info position-relative">
                              <ul
                                className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                role="tablist"
                              >
                                <li className="nav-item">
                                  <a
                                    href="#trending-data21"
                                    className="nav-link active show"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="true"
                                  >
                                    Overview
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data22"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Episodes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data23"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Trailers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#trending-data24"
                                    className="nav-link"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Similiar Like This
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="trending-content">
                              <div
                                id="trending-data21"
                                className="overview-tab tab-pane fade active show"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="javascript:void(0);" tabIndex={0}>
                                    <div className="res-logo">
                                      <div className="channel-logo">
                                        <img
                                          src="images/logo.png"
                                          className="c-logo"
                                          alt
                                        />
                                      </div>
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Mirzapur
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail">
                                    <span className="badge badge-secondary p-3">
                                      18+
                                    </span>
                                    <span className="ml-3">2 Seasons</span>
                                    <span className="trending-year">2018</span>
                                  </div>
                                  <div className="d-flex align-items-center series mb-4">
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/trending/trending-label.png"
                                        className="img-fluid"
                                        alt
                                      />
                                    </a>
                                    <span className="text-gold ml-3">
                                      #11 in Series Today
                                    </span>
                                  </div>
                                  <p className="trending-dec">
                                    A shocking incident at a wedding procession
                                    ignites a series of events entangling the
                                    lives of two families in the lawless city of
                                    Mirzapur.
                                  </p>
                                  <div className="p-btns">
                                    <div className="d-flex align-items-center p-0">
                                      <a
                                        href="#"
                                        className="btn btn-hover mr-2"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-play mr-2" />
                                        Play Now
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-link"
                                        tabIndex={0}
                                      >
                                        <i className="fa fa-plus pr-2" />
                                        My List
                                      </a>
                                    </div>
                                  </div>
                                  <div className="trending-list mt-4">
                                    <div className="text-primary title">
                                      Starring :
                                      <span className="text-body">
                                        Pankaj Tripathi, Ali Fazal, Divyendu
                                        Sharma
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Genres :
                                      <span className="text-body">
                                        Action, Crime, Drama
                                      </span>
                                    </div>
                                    <div className="text-primary title">
                                      Creators :
                                      <span className="text-body">
                                        Puneet Krishna, Karan Anshuman
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data22"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Mirzapur
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail mb-4">
                                    <span className="season_date">
                                      2 Seasons
                                    </span>
                                    <span className="trending-year">
                                      Feb 2019
                                    </span>
                                  </div>
                                  <div className="iq-custom-select d-inline-block sea-epi">
                                    <select
                                      name="Seasons"
                                      className="form-control season-select"
                                    >
                                      <option value="Season1">Season 1</option>
                                      <option value="Season2">Season 2</option>
                                    </select>
                                  </div>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Episode 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data23"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Mirzapur
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m1.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="trending-data24"
                                className="overlay-tab tab-pane fade"
                              >
                                <div className="trending-info align-items-center w-100 animated fadeInUp">
                                  <a href="#" tabIndex={0}>
                                    <div className="channel-logo">
                                      <img
                                        src="images/logo.png"
                                        className="c-logo"
                                        alt
                                      />
                                    </div>
                                  </a>
                                  <h1 className="trending-text big-title text-uppercase">
                                    Mirzapur
                                  </h1>
                                  <div className="episodes-contens mt-4">
                                    <div className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/bbt3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 1</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/fe2.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 2</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/m4.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 3</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/pb3.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 4</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="e-item">
                                        <div className="block-image position-relative">
                                          <a href="#">
                                            <img
                                              src="images/episodes/n5.jpg"
                                              className="img-fluid"
                                              alt
                                            />
                                          </a>
                                          <div className="episode-play-info">
                                            <div className="episode-play">
                                              <a href="#" tabIndex={0}>
                                                <i className="fa fa-play" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="episodes-description text-body">
                                          <div className="d-flex align-items-center justify-content-between">
                                            <a href="#">Trailer 5</a>
                                            <span className="text-primary">
                                              2.25m
                                            </span>
                                          </div>
                                          <p className="mb-0">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Cumque
                                            aliquam quisquam iure tempore earum
                                            sequi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="iq-suggested" className="s-margin">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 overflow-hidden">
                  <div className="iq-main-header d-flex align-items-center justify-content-between">
                    <h4 className="main-title">Recommended For You</h4>
                    <a href="#" className="iq-view-all">
                      View All
                    </a>
                  </div>
                  <div className="favorite-contens">
                    <ul className="favorites-slider list-inline row p-0 mb-0">
                      {/* slide item 1 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/tvthrillers/01.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#">The Martian</a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                15+
                              </div>
                              <span className="text-white">2h 45min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">89+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 2 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/tvthrillers/02.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#">Unhinged</a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                7+
                              </div>
                              <span className="text-white">2h 12min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">35+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 3 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/tvthrillers/03.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#">Kingsman</a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                18+
                              </div>
                              <span className="text-white">3h</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">99+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 4 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/tvthrillers/04.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Casino Royale</a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                18+
                              </div>
                              <span className="text-white">1h 55min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* slide item 5 */}
                      <li className="slide-item">
                        <div className="block-images position-relative">
                          <div className="img-box">
                            <img
                              src="images/tvthrillers/05.jpg"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="block-description">
                            <h6 className="iq-title">
                              <a href="#"> Mision Impossible</a>
                            </h6>
                            <div className="movie-time d-flex align-items-center my-2">
                              <div className="badge badge-secondary p-1 mr-2">
                                17+
                              </div>
                              <span className="text-white">1h 35min</span>
                            </div>
                            <div className="hover-buttons">
                              <span className="btn btn-hover iq-button">
                                <i className="fa fa-play mr-1" />
                                Play Now
                              </span>
                            </div>
                          </div>
                          <div className="block-social-info">
                            <ul className="list-inline p-0 m-0 music-play-lists">
                              <li className="share">
                                <span>
                                  <i className="fa fa-share-alt" />
                                </span>
                                <div className="share-box">
                                  <div className="d-flex align-items-center">
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-youtube" />
                                    </a>
                                    <a href="#" className="share-ico">
                                      <i className="fa fa-instagram" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-heart" />
                                </span>
                                <span className="count-box">19+</span>
                              </li>
                              <li>
                                <span>
                                  <i className="fa fa-plus" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
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
