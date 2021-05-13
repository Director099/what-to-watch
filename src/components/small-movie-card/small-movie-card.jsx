import React from 'react';
import PropTypes from "prop-types";

export const SmallMovieCard = ({title, img, className, onMouseEnter = () => {}, onMouseLeave}) => {
  return (
    <article
      className={`small-movie-card ${className}`}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <img src={img} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};
