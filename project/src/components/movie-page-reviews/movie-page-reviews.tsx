interface IReview {
  author: string,
  date: string,
  rating: string,
  text: string,
  id: string
}

export const MovieCardReviews = ({reviews}: any) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews?.map(({author, date, rating, text, id}: IReview) =>
          <div className="review" key={id}>
            <blockquote className="review__quote">
              <p className="review__text">{text}</p>
              <footer className="review__details">
                <cite className="review__author">{author}</cite>
                <time className="review__date" dateTime="2016-12-24">{date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{rating}</div>
          </div>
        )}
      </div>
    </div>
  );
};
