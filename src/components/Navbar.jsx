import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Assets | Icons | Logo :
import { IoMdPerson } from "react-icons/io";
import logo from "../assets/zeropark-logo-color-cm.svg";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

// css :
import "./style/Navbar.scss";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const threshold = 150;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > threshold) {

        setIsVisible(false);
      } else if (scrollTop < lastScrollTop || scrollTop <= threshold) {

        setIsVisible(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <>

      <header className="navbar"
        data-aos="slide-down"
        data-aos-duration='6000'>
        <div className={`header__Container ${isVisible ? '' : 'hidden'}`}>
          <p>🧩⚙️🎯&nbsp;&nbsp;&nbsp;The
            <strong>&nbsp;Placement Categories</strong>
            &nbsp;update is now &nbsp;
            <strong>LIVE! &nbsp;</strong>
            Enjoy the new supply categorization and granular insights into the platform.&nbsp;
            <strong style={{ textDecoration: 'underline' }}>Explore</strong>
          </p>
        </div>
        <div className="navbar__container max-width">
          <div onClick={() => navigate("/")} className="navbar__logo">
            <img src={logo} alt="Zeropark Logo" />
          </div>

          <button className="navbar__hamburger" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoIosClose size={24} color="black" />
            ) : (
              <IoIosMenu color="black" style={{ color: "black" }} size={24} />
            )}
          </button>

          <div
            className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""
              }`}>
            <ul>
              <li>
                <Link to="solution">
                  {" "}
                  <span>
                    Solutions <IoIosArrowDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>
                    Resources <IoIosArrowDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>
            </ul>
            <div className="navbar__auth">
              <div>
                <button className="signup-btn">Sign up</button>
              </div>
              <div>
                <button className="login-btn">
                  {" "}
                  <span className="icon">
                    <IoMdPerson size={20} /> Login
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
