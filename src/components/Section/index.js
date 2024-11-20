import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Section = () => {
  const [Text, setText] = useState({});
  const [Sinopsis, setSinopsis] = useState({});
  const [images, setImages] = useState({});
  const [imageBase64, setImageBase64] = useState("");

  useEffect(() => {
    const database = getDatabase();
    const imageRef = ref(database, "Image");
    const TextRef = ref(database, "Text");
    const SinopsisRef = ref(database, "Sinopsis");

    onValue(imageRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data || {});

      if (data) {
        const firstImage = Object.values(data)[0];
        setImageBase64(firstImage);
      }
    });

    onValue(TextRef, (snapshot) => {
      const data = snapshot.val();
      setText(data);
    });

    onValue(SinopsisRef, (snapshot) => {
      const data = snapshot.val();
      setSinopsis(data);
    });
  }, []);

  return (
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
                      {imageBase64 ? (
                        <img
                          className="img-fluid w-100 rounded-circle shadow-sm"
                          src={`data:image/jpeg;base64,${images.Logo}`}
                          alt="Image from Firebase"
                        />
                      ) : (
                        <div className="text-white">Loading image...</div>
                      )}
                    </div>
                  </a>
                  <h1
                    className="slider-text big-title title text-uppercase"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.6"
                  >
                    {Text.Title1}
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
                  <p data-animation-in="fadeInUp">{Sinopsis.Sinopsis1}</p>
                  <div
                    className="trending-list"
                    data-animation-in="fadeInUp"
                    data-delay-in="1.2"
                  >
                    <div className="text-primary title starring">
                      Starring :
                      <span className="text-body">{Text.Starring1}</span>
                    </div>
                    <div className="text-primary title genres">
                      Genres : <span className="text-body">{Text.Genres1}</span>
                    </div>
                    <div className="text-primary title tag">
                      Tags :<span className="text-body">{Text.Tags1}</span>
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
                      {imageBase64 ? (
                        <img
                          className="img-fluid w-100 rounded-circle shadow-sm"
                          src={`data:image/jpeg;base64,${images.Logo}`}
                          alt="Image from Firebase"
                        />
                      ) : (
                        <div className="text-white">Loading image...</div>
                      )}
                    </div>
                  </a>
                  <h1
                    className="slider-text big-title title text-uppercase"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.6"
                  >
                    {Text.Title2}
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
                  <p data-animation-in="fadeInUp">{Sinopsis.Sinopsis2}</p>
                  <div
                    className="trending-list"
                    data-animation-in="fadeInUp"
                    data-delay-in="1.2"
                  >
                    <div className="text-primary title starring">
                      Starring :
                      <span className="text-body">{Text.Starring2}</span>
                    </div>
                    <div className="text-primary title genres">
                      Genres : <span className="text-body">{Text.Genres2}</span>
                    </div>
                    <div className="text-primary title tag">
                      Tags :<span className="text-body">{Text.Tags2}</span>
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
                      {imageBase64 ? (
                        <img
                          className="img-fluid w-100 rounded-circle shadow-sm"
                          src={`data:image/jpeg;base64,${images.Logo}`}
                          alt="Image from Firebase"
                        />
                      ) : (
                        <div className="text-white">Loading image...</div>
                      )}
                    </div>
                  </a>
                  <h1
                    className="slider-text big-title title text-uppercase"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.6"
                  >
                    {Text.Title3}
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
                  <p data-animation-in="fadeInUp">{Sinopsis.Sinopsis3}</p>
                  <div
                    className="trending-list"
                    data-animation-in="fadeInUp"
                    data-delay-in="1.2"
                  >
                    <div className="text-primary title starring">
                      Starring :
                      <span className="text-body">{Text.Starring3}</span>
                    </div>
                    <div className="text-primary title genres">
                      Genres : <span className="text-body">{Text.Genres3}</span>
                    </div>
                    <div className="text-primary title tag">
                      Tags :<span className="text-body">{Text.Tags3}</span>
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
  );
};

export default Section;
