import React from "react";
import PropTypes from "prop-types";

//this is a react stateless function
const Header = props => (
  <React.Fragment>
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        day
      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  </React.Fragment>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
