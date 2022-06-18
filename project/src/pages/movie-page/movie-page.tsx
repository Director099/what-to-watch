import React, {FC} from 'react';
import {Link, useParams} from "react-router-dom";
import {MovieNav} from "../../components/movie-nav/movie-nav";
import {Footer} from "../../components/footer/footer";
import {PageContent} from "../../components/page-content/page-content";
import {useGate, useStore} from "effector-react";
import {$commentFilm, $movie, $similarFilms, gateCurrentFilmInit} from "../../feature/films/films";
import {Header} from "../../components/header/header";
import {Catalog} from "../../components/catalog/catalog";
import {SmallMovieCard} from "../../components/small-movie-card/small-movie-card";
import {MovieCardButtons} from "../../components/movie-card-buttons/movie-card-buttons";

interface IMovie {
  name?: string,
  genre?: string,
  released?: string,
  posterImage?: string,
  backgroundImage?: string,
  backgroundColor?: string,
}

export const MoviePage: FC = () => {
  const {id} = useParams();
  useGate(gateCurrentFilmInit, id);

  const movie = useStore<IMovie>($movie);
  const commentFilm = useStore($commentFilm);
  const similarFilms = useStore($similarFilms);

  const {
    name,
    genre,
    released,
    posterImage,
    backgroundImage,
    backgroundColor
  } = movie;

  return (
    <>
      <section className="movie-card movie-card--full" style={{backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="movie-card__head" authorized/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <MovieCardButtons addReview={true} id={id}/>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <MovieNav movie={movie} reviews={commentFilm} />
            </div>
          </div>
        </div>
      </section>
      <PageContent>
        <Catalog title="More like this" titleVisuallyHidden={false} className="catalog--like-this">
          <div className="catalog__movies-list">
            {/*Исключить существующий фильм(По id)*/}
            {similarFilms.map(({name, previewImage, videoLink, id}: any, index: number) =>
              <>
                <SmallMovieCard
                  key={`answer-${index}`}
                  title={name}
                  img={previewImage}
                  prevVideo={videoLink}
                  className="catalog__movies-card"
                  id={id}
                />
              </>
            )}
          </div>
        </Catalog>
        <Footer/>
      </PageContent>
    </>
  );
};
