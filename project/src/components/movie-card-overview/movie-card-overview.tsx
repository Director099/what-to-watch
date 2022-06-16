import {FC} from "react";

interface IMovie {
  description: string,
  rating: string,
  director: string,
  starring: string[],
  scoresCount: number
}

export const MovieCardOverview: FC<IMovie> = ({description, starring, director, scoresCount,  rating}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>Starring: {starring?.map((item: string) => item + `, `)} and other</strong>
        </p>
      </div>
    </>
  );
};
