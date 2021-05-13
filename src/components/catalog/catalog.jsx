import React from "react";
import {SmallMovieCard} from "../small-movie-card/small-movie-card";
import {CatalogGenresList} from "../catalog-genres-list/catalog-genres-list";

const Catalog = ({movie}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList />

      <div className="catalog__movies-list">
        {movie.map(({title, img}, index) =>
          <SmallMovieCard
            key={`answer-${index}`}
            title={title}
            img={img}
            className="catalog__movies-card"
            onMouseLeave={() => console.log(index)}
          />
        )}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

export default Catalog;
