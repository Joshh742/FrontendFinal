import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Parallex = () => {
  const [Parallex, setParallex] = useState({});
  const [imageBase64, setImageBase64] = useState("");

  useEffect(() => {
    const database = getDatabase();
    const ParallexRef = ref(database, "Parallex");
    
    onValue(ParallexRef, (snapshot) => {
      const data = snapshot.val();
      setParallex(data || {});

      if (data) {
        const firstImage = Object.values(data)[0];
        setImageBase64(firstImage);
      }
    });
    onValue(ParallexRef, (snapshot) => {
      const data = snapshot.val();
      setParallex(data);
    });
  }, []);
  return (
    <section id="parallex" className="parallax-window">
      <div className="container-fluid h-100">
        <div className="row align-items-center justify-content-center h-100 parallaxt-details">
          <div className="col-lg-4 r-mb-23">
            <div className="text-left">
              <a href="javascript:void(0)">
                <h1 className="parallax-heading">{Parallex.Title}</h1>
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
              {Parallex.Sinopsis}
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
                 src={`data:Parallex/jpeg;base64,${Parallex.Image1}`}
                        alt="Image from Firebase"
                  className="img-fluid w-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallex;
