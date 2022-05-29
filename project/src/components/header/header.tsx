import {Link} from "react-router-dom";

interface IHeader {
  imgAvatar: string,
  mainTitle?: string,
  className?: string
}

export const Header: React.FC<IHeader> = ({imgAvatar, mainTitle, className = ''}) => (
  <header className={`page-header ${className}`}>
    <div className="logo">
      <Link to="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>

    {mainTitle && <h1 className="page-title user-page__title">{mainTitle}</h1>}

    <Link to="/my-list" className="user-block">
      <div className="user-block__avatar">
        <img src={imgAvatar} alt="User avatar" width="63" height="63"/>
      </div>
    </Link>
  </header>
);
