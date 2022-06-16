interface IReview {
  date: string,
  rating: number,
  comment: string,
  id: number,
  user: {
    id: number,
    name: string
  }
}

export const MovieCardReviews = ({reviews}: any) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews?.map(({date, rating, comment, id, user}: IReview) => {
          const reviewDate = new Date(date);
          const reviewDateFormat = reviewDate.toLocaleDateString("en-US",  { year: 'numeric', month: 'long', day: 'numeric' });
          return (
            <div className="review" key={id}>
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">{reviewDateFormat}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{rating}</div>
            </div>
          )}
        )}
      </div>
    </div>
  );
};
