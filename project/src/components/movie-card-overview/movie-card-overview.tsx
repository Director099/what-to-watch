import {FC} from "react";

interface IMovie {
  description: string,
  rating: number,
  director: string,
  starring: string[],
  scoresCount: number
}

export const MovieCardOverview: FC<IMovie> = ({description, starring, director, scoresCount, rating}) => {
  const filmScore = (rating: number) => {
    if (rating <= 3) {
      return 'Bad'
    } else if (rating <= 5) {
      return 'Normal'
    } else if (rating <= 8) {
      return 'Good'
    } else if (rating <= 10) {
      return 'Very good'
    } else if (rating > 10) {
      return 'Very good'
    }
  };

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{filmScore(rating)}</span>
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
