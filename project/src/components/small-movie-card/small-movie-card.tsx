import {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {PreviewVideo} from "../preview-video/preview-video";
import {linkFilm} from "../../feature/films/films";

interface ISmallMovieCard {
  title: string,
  img: string,
  className: string,
  prevVideo: string,
  id: number,
}

export const SmallMovieCard: FC<ISmallMovieCard> = ({title, img, className, prevVideo, id}) => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  let timer: NodeJS.Timeout;

  return (
    <article
      className={`small-movie-card ${className}`}
      onMouseLeave={() => {
        setMouseOver(false);
        clearTimeout(timer);
      }}
      onMouseEnter={() => timer = setTimeout(() => {
        setMouseOver(true);
      }, 1000)}
    >
      <div className="small-movie-card__image">
        {mouseOver &&
          <PreviewVideo prevVideo={prevVideo}/>
        }
        <img src={img} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link" onClick={() => linkFilm(id)}>{title}</Link>
      </h3>
    </article>
  )
};
