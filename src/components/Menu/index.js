const Menu = () => {
    return (
        <div className="menu-main-menu-container">
        <ul id="top-menu" className="navbar-nav ml-auto">
          <li className="menu-item">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">Movies</a>
          </li>
          <li className="menu-item">
            <a href="#">Shows</a>
          </li>
          <li className="menu-item">
            <a href="#">Contact Us</a>
            <ul className="sub-menu">
              <li className="menu-item">
                <a href="#">About Us</a>
              </li>
              <li className="menu-item">
                <a href="#">Contact</a>
              </li>
              <li className="menu-item">
                <a href="#">FAQ</a>
              </li>
              <li className="menu-item">
                <a href="#">Privacy-Policy</a>
              </li>
              <li className="menu-item">
                <a href="#">Pricing</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="#">Gold Membership</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Silver Membership</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Bronze Membership</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div> 
    );
  };
  
  export default Menu;
  