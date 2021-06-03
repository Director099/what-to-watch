import React, {useState} from 'react';

export const CatalogGenresList = ({movie}) => {
  const [active, setActive] = useState(0);
  const clickHandlerActive = (index) => {
    setActive(index);
  };

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {movie.map(({genre}, index) =>
        <li
          className={`catalog__genres-item ${active === index && `catalog__genres-item--active`}`}
          key={`genre-${index}`}
          onClick={() => clickHandlerActive(index)}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      )}
    </ul>
  );
};
