import {Link} from "react-router-dom";
import React from "react";
import avatar from "../../assets/img/avatar.jpg";

interface IHeader {
  mainTitle?: string,
  className?: string,
  authorized?: boolean,
  children?: React.ReactNode
}

export const Header: React.FC<IHeader> = ({mainTitle, children, className = '', authorized = false}) => (
  <header className={`page-header ${className}`}>
    <div className="logo">
      <Link to="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>

    {children}

    {mainTitle && <h1 className="page-title user-page__title">{mainTitle}</h1>}

    {authorized &&
      <Link to="/my-list" className="user-block">
        <div className="user-block__avatar">
          <img src={avatar} alt="User avatar" width="63" height="63"/>
        </div>
      </Link>
    }
  </header>
);
