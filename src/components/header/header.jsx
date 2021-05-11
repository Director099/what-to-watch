import React from "react";
import PropTypes from "prop-types";

const Header = ({imgAvatar, mainTitle}) => {
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {mainTitle &&
        <h1 className="page-title user-page__title">{mainTitle}</h1>
      }

      <div className="user-block">
        <div className="user-block__avatar">
          <img src={imgAvatar} alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  imgAvatar: PropTypes.string,
  mainTitle: PropTypes.string,
};

export default Header;
