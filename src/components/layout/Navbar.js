import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Doma</Link>
        </li>
        <li>
          <Link to="/about">O nama</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
