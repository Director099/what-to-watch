import React, {useState} from 'react';
import {genres} from '../../mock/genres';

export const CatalogGenresList = () => {
  const [active, setActive] = useState(0);
  const clickHandlerActive = (index) => {
    setActive(index);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((text, index) =>
        <li
          className={`catalog__genres-item ${active === index && `catalog__genres-item--active`}`}
          key={`genre-${index}`}
          onClick={() => clickHandlerActive(index)}
        >
          <a href="#" className="catalog__genres-link">{text}</a>
        </li>
      )}
    </ul>
  );
};
