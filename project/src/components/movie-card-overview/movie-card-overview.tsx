import {FC} from "react";

interface IMovie {
  description: string[],
  rating: string,
  votes: string,
  director: string,
  starring: string[]
}

export const MovieCardOverview: FC<IMovie> = ({description, starring, director, votes, rating}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description.map((item: string, index: number) =>
          <p key={`key-` + index}>{item}</p>
        )}

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>Starring: {starring.map((item: string) => item + `, `)} and other</strong>
        </p>
      </div>
    </>
  );
};
