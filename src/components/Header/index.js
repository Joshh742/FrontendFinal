import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

const Header = () => {
  return (
    <header id="main-header">
      <div className="main-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <a
                  href="#"
                  className="navbar-toggler c-toggler"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <div className="navbar-toggler-icon" data-toggle="collapse">
                    <span className="navbar-menu-icon navbar-menu-icon--top" />
                    <span className="navbar-menu-icon navbar-menu-icon--middle" />
                    <span className="navbar-menu-icon navbar-menu-icon--bottom" />
                  </div>
                </a>
                <a href="index.html" className="navbar-brand">
                  <img src="images/XXI.png" className="img-fluid logo" alt />
                </a>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <Menu />
                </div>
                <MobileMenu />
                <div className="navbar-right menu-right">
                  <ul className="d-flex align-items-center list-inline m-0">
                    <li className="nav-item nav-icon">
                      <a href="#" className="search-toggle device-search">
                        <i className="fa fa-search" />
                      </a>
                      <div className="search-box iq-search-bar d-search">
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
                        className="search-toggle"
                        data-toggle="search-toggle"
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
                    <li className="nav-item nav-icon">
                      <a
                        href="#"
                        className="iq-user-dropdown search-toggle d-flex align-items-center p-0"
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
              </nav>
              <div className="nav-overlay" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
