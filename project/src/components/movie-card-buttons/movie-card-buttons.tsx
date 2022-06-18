import {Link} from "react-router-dom";
import React, {FC} from "react";

interface IMovieCardButtons {
  addReview?: boolean,
  id?: string,
}

export const MovieCardButtons: FC<IMovieCardButtons> = ({addReview = false, id}) => {
  return (
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
      {addReview &&
        <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
      }
    </div>
  )
}
