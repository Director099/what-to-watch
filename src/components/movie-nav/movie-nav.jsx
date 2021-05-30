import React, {useState} from 'react';
import {movieNavInfo} from "../../mock/movie-nav-info";

export const MovieNav = () => {
  const [active, setActive] = useState(0);
  const clickHandlerActive = (index) => {
    setActive(index);
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {movieNavInfo.map((text, index) =>
          <li
            className={`movie-nav__item ${active === index && `movie-nav__item--active`}`}
            key={`genre-${index}`}
            onClick={() => clickHandlerActive(index)}
          >
            <a href="#" className="movie-nav__link">{text}</a>
          </li>
        )}
      </ul>
    </nav>
  );
};
