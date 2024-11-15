const MobileMenu = () => {
    return (
        <div className="mobile-more-menu">
        <a
          href="javascript:void(0);"
          className="more-toggle"
          id="dropdownMenuButton"
          data-toggle="more-toggle"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-h" />
        </a>
        <div
          className="more-menu"
          aria-labelledby="dropdownMenuButton"
        >
          <div className="navbar-right position-relative">
            <ul className="d-flex align-items-center justify-content-end list-inline m-0">
              <li>
                <a href="#" className="search-toggle">
                  <i className="fa fa-search" />
                </a>
                <div className="search-box iq-search-bar">
                  <form action="#" className="searchbox">
                    <div className="form-group position-relative">
                      <input
                        type="text"
                        className="text search-input font-size-12"
                        placeholder="type here to search..."
                      />
                      <i className="search-link fa fa-search" />
                    </div>
                  </form>
                </div>
              </li>
              <li className="nav-item nav-icon">
                <a
                  href="#"
                  className="search-toggle position-relative"
                >
                  <i className="fa fa-bell" />
                  <span className="bg-danger dots" />
                </a>
                <div className="iq-sub-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body">
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <img
                            src="images/notify/thumb-1.jpg"
                            alt
                            className="img-fluid mr-3"
                          />
                          <div className="media-body">
                            <h6 className="mb-0">Captain Marvel</h6>
                            <small className="font-size-12">
                              just now
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <img
                            src="images/notify/thumb-2.jpg"
                            alt
                            className="img-fluid mr-3"
                          />
                          <div className="media-body">
                            <h6 className="mb-0">
                              Dora and The Lost City of Gold
                            </h6>
                            <small className="font-size-12">
                              25 mins ago
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <img
                            src="images/notify/thumb-3.jpg"
                            alt
                            className="img-fluid mr-3"
                          />
                          <div className="media-body">
                            <h6 className="mb-0">Mulan</h6>
                            <small className="font-size-12">
                              1h 30 mins ago
                            </small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="iq-user-dropdown search-toggle d-flex align-items-center"
                >
                  <img
                    src="images/user/user.png"
                    className="img-fluid user-m rounded-circle"
                    alt
                  />
                </a>
                <div className="iq-sub-dropdown iq-user-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 pl-3 pr-3">
                      <a
                        href="#"
                        className="iq-sub-card setting-dropdown"
                      >
                        <div className="media align-items-center">
                          <div className="right-icon">
                            <i className="fa fa-user text-primary" />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0">Manage Profile</h6>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="iq-sub-card setting-dropdown"
                      >
                        <div className="media align-items-center">
                          <div className="right-icon">
                            <i className="fa fa-cog text-primary" />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0">Settings</h6>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="iq-sub-card setting-dropdown"
                      >
                        <div className="media align-items-center">
                          <div className="right-icon">
                            <i className="fa fa-inr text-primary" />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0">Pricing Plan</h6>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="iq-sub-card setting-dropdown"
                      >
                        <div className="media align-items-center">
                          <div className="right-icon">
                            <i className="fa fa-sign-out text-primary" />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0">Logout</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default MobileMenu;
  