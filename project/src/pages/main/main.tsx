import React, {FC, useState} from 'react';
import {MovieCard} from "../../components/movie-card/movie-card";
import {Header} from "../../components/header/header";
import {PageContent} from "../../components/page-content/page-content";
import {Catalog} from "../../components/catalog/catalog";
import {Footer} from "../../components/footer/footer";
import {SmallMovieCard} from "../../components/small-movie-card/small-movie-card";
import {$listFilms, gateInit} from "../../feature/films/films"
import {useStore} from "effector-react/compat";
import {useGate} from "effector-react";
import avatar from "../../assets/img/avatar.jpg";

export const Main: FC = () => {
  useGate(gateInit);
  const listFilms = useStore($listFilms);

  const ALL_GENRES = `All genres`;
  const [currentNumberMovies, setCurrentNumberMovies] = useState(8);
  const [activeFilter, setActiveFilter] = useState(ALL_GENRES);
  const clickHandlerActive = (text: string) => {
    setActiveFilter(text);
  };

  const filterFilm = listFilms.filter(({genre}) => {
    if (ALL_GENRES === activeFilter) {
      return listFilms;
    } else if (genre === activeFilter) {
      return genre === activeFilter;
    }
  });

  const genres = listFilms.map(({genre}) => genre);

  const arrSingleGenres = genres.filter((item: string, index: number) => {
    // @ts-ignore
    return genres.indexOf(item) === index;
  });

  return(
    <>
      <MovieCard>
        <Header className="movie-card__head" authorized/>
      </MovieCard>
      <PageContent>
        <Catalog title="Catalog">
          <ul className="catalog__genres-list">
            <li className={`catalog__genres-item ${activeFilter === ALL_GENRES && `catalog__genres-item--active`}`}>
              <a className="catalog__genres-link" onClick={() => clickHandlerActive(ALL_GENRES)}>All genres</a>
            </li>
            {arrSingleGenres.map((genre: string, index: any) =>
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
            {filterFilm.map(({name, previewImage, videoLink, id}: any, index: number) =>
              <>
                {index < currentNumberMovies &&
                  <SmallMovieCard
                    key={`answer-${index}`}
                    title={name}
                    img={previewImage}
                    prevVideo={videoLink}
                    className="catalog__movies-card"
                    id={id}
                  />
                }
              </>
            )}
          </div>
          {currentNumberMovies < filterFilm.length &&
            <div className="catalog__more">
              <button
                className="catalog__button"
                type="button"
                onClick={() => setCurrentNumberMovies(currentNumberMovies + 4)}> Show more
              </button>
            </div>
          }
        </Catalog>
        <Footer/>
      </PageContent>
    </>
  )
};
