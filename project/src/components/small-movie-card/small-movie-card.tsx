import {FC, useState} from 'react';
import {PreviewVideo} from "../preview-video/preview-video";

interface ISmallMovieCard {
  title: string,
  img: string,
  className: string,
  prevVideo: string,
}

export const SmallMovieCard: FC<ISmallMovieCard> = ({title, img, className, prevVideo}) => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  let timer: NodeJS.Timeout;

  return (
    <article
      className={`small-movie-card ${className}`}
      onMouseOut={() => {
        setMouseOver(false);
        clearTimeout(timer);
      }}
      onMouseOver={() => timer = setTimeout(() => {
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
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  )
};
