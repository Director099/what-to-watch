import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Header} from "../../components/header/header";
import {useGate, useStore} from "effector-react";
import {$movie, gateCurrentFilmInit, submitFormComment} from "../../feature/films/films";
import {useParams} from "react-router";

interface IMovie {
  name?: string,
  genre?: string,
  released?: string,
  posterImage?: string,
  backgroundImage?: string,
  backgroundColor?: string,
}

export const AddReview: FC = () => {
  const {id} = useParams();
  useGate(gateCurrentFilmInit, id);
  const movie = useStore<IMovie>($movie);

  const {
    name,
    posterImage,
    backgroundImage,
    backgroundColor
  } = movie;

  const styled: React.CSSProperties = {
    backgroundColor: backgroundColor,
    filter: `brightness(0.85)`
  };

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header authorized >
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218"
               height="327"/>
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text" style={styled}>
            <textarea className="add-review__textarea" name="review-text" id="review-text"
                      placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="button" onClick={() => submitFormComment(id)}>Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
};
