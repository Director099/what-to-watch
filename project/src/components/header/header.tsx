interface IHeader {
  imgAvatar: string,
  mainTitle?: string,
}

export const Header: React.FC<IHeader> = ({imgAvatar, mainTitle}) => (
  <header className="page-header movie-card__head">
    <div className="logo">
      <a className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    {mainTitle && <h1 className="page-title user-page__title">{mainTitle}</h1>}

    <div className="user-block">
      <div className="user-block__avatar">
        <img src={imgAvatar} alt="User avatar" width="63" height="63"/>
      </div>
    </div>
  </header>
);
