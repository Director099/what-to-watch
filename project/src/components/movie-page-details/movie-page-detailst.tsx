import {FC} from 'react';

interface IMovieCardDetails {
  runTime: number,
  genre: string,
  released: number,
  director: string,
  starring: string[]
}

export const MovieCardDetails: FC<IMovieCardDetails> = ({runTime, genre, released, starring, director}) => {
  const timeFormatting = (minute: number) => {
    const timeImMinute = new Date(0, 0, 0, 0, minute);
    const totalTimeHours = timeImMinute.getHours();
    const totalTimeMinute = timeImMinute.getMinutes();
    return `${totalTimeHours}h ${totalTimeMinute}m`
  };

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((e) =>
              <>{e} <br/></>
            )}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{timeFormatting(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};
