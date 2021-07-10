import React, {useState} from "react";
import {useStore} from "effector-react";
import {SmallMovieCard} from "../small-movie-card/small-movie-card";
import {
  $films,
} from "../../model";

const Catalog = () => {
  const films = useStore($films);
  const ALL_GENRES = `All genres`;
  let timer;

  const mouseOverHandler = (e, {img, prevVideo}) => {
    const video = document.createElement(`video`);
    const picturePrev = e.currentTarget.querySelector(`img`);
    const prevElement = e.currentTarget.querySelector(`.small-movie-card__image`);
    video.poster = img;
    video.src = prevVideo;
    video.muted = true;
    video.style.objectFit = `cover`;
    video.style.width = `100%`;
    video.style.height = `100%`;
    timer = setTimeout(() => {
      if (!prevElement.querySelector(`video`)) {
        prevElement.prepend(video);
        picturePrev.style.display = `none`;
        video.play();
      }
    }, 1000);
  };

  const mouseOutHandler = (e) => {
    clearTimeout(timer);
    const videoElem = e.currentTarget.querySelector(`video`);
    const picturePrev = e.currentTarget.querySelector(`img`);
    picturePrev.style.display = `block`;
    if (videoElem) {
      videoElem.pause();
      videoElem.remove();
    }
  };

  const [currentNumberMovies, setCurrentNumberMovies] = useState(8);
  const [activeFilter, setActiveFilter] = useState(ALL_GENRES);
  const clickHandlerActive = (text) => {
    setActiveFilter(text);
  };

  const filterFilm = films.filter((cinema) => {
    if (ALL_GENRES === activeFilter) {
      return films;
    } else if (cinema.genre === activeFilter) {
      return cinema.genre === activeFilter;
    }
  });

  const genres = films.map((item) => item.genre);

  const arrSingleGenres = genres.filter((item, index) => {
    return genres.indexOf(item) === index;
  });

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className={`catalog__genres-item ${activeFilter === ALL_GENRES && `catalog__genres-item--active`}`}>
          <a className="catalog__genres-link" onClick={() => clickHandlerActive(ALL_GENRES)}>All genres</a>
        </li>
        {arrSingleGenres.map((genre, index) =>
          <li
            className={`catalog__genres-item ${activeFilter === genre && `catalog__genres-item--active`}`}
            key={`genre-${index}`}
            onClick={() => clickHandlerActive(genre)}
          >
            <a className="catalog__genres-link">{genre}</a>
          </li>
        )}
      </ul>

      <div className="catalog__movies-list">
        {filterFilm.map(({title, img, prevVideo}, index) =>
          <>
            {index < currentNumberMovies &&
              <SmallMovieCard
                key={`answer-${index}`}
                title={title}
                img={img}
                prevVideo={prevVideo}
                className="catalog__movies-card"
                onMouseOut={mouseOutHandler}
                onMouseOver={(e) => mouseOverHandler(e, {img, prevVideo})}
              />
            }
          </>
        )}
      </div>
      {currentNumberMovies < filterFilm.length &&
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={() => setCurrentNumberMovies(currentNumberMovies + 4)}>Show more</button>
        </div>
      }
    </section>
  );
};

export default Catalog;
