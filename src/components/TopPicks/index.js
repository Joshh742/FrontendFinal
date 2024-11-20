import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const TopPicks = () => {
  const [hero, setImages] = useState({});
  const [imageBase64, setImageBase64] = useState("");

  useEffect(() => {
    const database = getDatabase();
    const imageRef = ref(database, "Hero");

    onValue(imageRef, (snapshot) => {
      const data = snapshot.val();
      setImages(data || {});

      if (data) {
        const firstImage = Object.values(data)[0];
        setImageBase64(firstImage);
      }
    });
  }, []);

  return (
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
                        className="img-fluid"
                        src={`data:hero/jpeg;base64,${hero.Image1}`}
                        alt="Image from Firebase"
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
                        className="img-fluid"
                        src={`data:hero/jpeg;base64,${hero.Image2}`}
                        alt="Image from Firebase"
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
                        className="img-fluid"
                        src={`data:hero/jpeg;base64,${hero.Image3}`}
                        alt="Image from Firebase"
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
                        className="img-fluid"
                        src={`data:hero/jpeg;base64,${hero.Image4}`}
                        alt="Image from Firebase"
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
                        className="img-fluid"
                        src={`data:hero/jpeg;base64,${hero.Image5}`}
                        alt="Image from Firebase"
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
  );
};

export default TopPicks;
