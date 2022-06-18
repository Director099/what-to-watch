import React, {CSSProperties, FC} from 'react';
import {Link, useParams} from "react-router-dom";
import {MovieNav} from "../../components/movie-nav/movie-nav";
import {films} from "../../mock/films";
import {Footer} from "../../components/footer/footer";
import {PageContent} from "../../components/page-content/page-content";
import {Catalog} from "../../components/catalog/catalog";
import {SmallMovieCard} from "../../components/small-movie-card/small-movie-card";
import {useGate, useStore} from "effector-react";
import {$commentFilm, $movie, gateCurrentFilmInit} from "../../feature/films/films";
import {Header} from "../../components/header/header";


export const MoviePage: FC = () => {
  const MAX_LIKE_MOVIES = 4;
  const {id} = useParams();
  useGate(gateCurrentFilmInit, id);

  const movie = useStore($movie);
  const commentFilm = useStore($commentFilm);
  const {
    name,
    genre,
    released,
    posterImage,
    backgroundImage,
    backgroundColor
  }: any = movie;
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

              <div className="movie-card__buttons">
                <Link to="/player" className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
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
        {/*<Catalog title="More like this" titleVisuallyHidden={false} className="catalog--like-this">*/}
        {/*  <div className="catalog__movies-list">*/}
        {/*    {films.map(({title, img, prevVideo, id}: any, index: number) =>*/}
        {/*      <>*/}
        {/*        {index < MAX_LIKE_MOVIES &&*/}
        {/*          <SmallMovieCard*/}
        {/*            key={`answer-${index}`}*/}
        {/*            title={title}*/}
        {/*            img={img}*/}
        {/*            prevVideo={prevVideo}*/}
        {/*            className="catalog__movies-card"*/}
        {/*            id={id}*/}
        {/*          />*/}
        {/*        }*/}
        {/*      </>*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*</Catalog>*/}
        <Footer/>
      </PageContent>
    </>
  );
};
