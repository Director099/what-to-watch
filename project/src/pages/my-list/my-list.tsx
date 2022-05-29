import React, {FC} from 'react';
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import {Catalog} from "../../components/catalog/catalog";
import {SmallMovieCard} from "../../components/small-movie-card/small-movie-card";
import {films} from "../../mock/films";

export const MyList: FC = () => {
  return (
    <div className="user-page">
      <Header
        imgAvatar='img/avatar.jpg'
        mainTitle="My list"
        className="user-page__head"
      />
      <Catalog title="Catalog">
        <div className="catalog__movies-list">
          {films.map(({title, img, prevVideo}: any, index: number) =>
            <>
              {index < 9 &&
                <SmallMovieCard
                  key={`answer-${index}`}
                  title={title}
                  img={img}
                  prevVideo={prevVideo}
                  className="catalog__movies-card"
                />
              }
            </>
          )}
        </div>
      </Catalog>
      <Footer/>
    </div>
  )
};
