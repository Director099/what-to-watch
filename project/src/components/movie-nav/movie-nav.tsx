import React, {useState} from 'react';
import {MovieCardOverview} from "../movie-card-overview/movie-card-overview";
import {MovieCardReviews} from "../movie-page-reviews/movie-page-reviews";
import {MovieCardDetails} from "../movie-page-details/movie-page-detailst";

export const MovieNav = ({movie, reviews}: any) => {
  const tabsTemplate = {
    overview: <MovieCardOverview
      description={movie?.description}
      starring={movie?.starring}
      director={movie?.director}
      scoresCount={movie?.scoresCount}
      rating={movie?.rating}
    />,
    details: <MovieCardDetails
      time={movie?.time}
      genre={movie?.genre}
      year={movie?.year}
      director={movie?.director}
      starring={movie?.starring}
    />,
    reviews: <MovieCardReviews reviews={reviews}/>,
  };
  const [active, setActive] = useState(Object.keys(tabsTemplate)[0]);
  const clickHandlerActive = (index: number) => {
    setActive(Object.keys(tabsTemplate)[index]);
  };
  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.keys(tabsTemplate).map((text, index) =>
            <li
              className={`movie-nav__item ${active === text && `movie-nav__item--active`}`}
              key={`genre-${index}`}
              onClick={() => clickHandlerActive(index)}
            >
              <a href="#" className="movie-nav__link">{text[0].toUpperCase() + text.slice(1)}</a>
            </li>
          )}
        </ul>
      </nav>
      {tabsTemplate[active as keyof typeof tabsTemplate]}
    </>
  );
};
