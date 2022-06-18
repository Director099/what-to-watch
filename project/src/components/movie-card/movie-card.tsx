import React, {ReactNode} from "react";
import {useGate, useStore} from "effector-react";
import {$promoFilm, gateInit} from "../../feature/films/films";
import {MovieCardButtons} from "../movie-card-buttons/movie-card-buttons";

interface IMovieCard {
  children: ReactNode,
}

export const MovieCard: React.FC<IMovieCard> = ({children}) => {
  useGate(gateInit);
  const promoFilm = useStore($promoFilm);
  const {name, posterImage, backgroundImage, genre, released}: any = promoFilm;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      {children}

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <MovieCardButtons />
          </div>
        </div>
      </div>
    </section>
  );
};
