import React, {FC} from 'react';
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import {Catalog} from "../../components/catalog/catalog";
import {SmallMovieCard} from "../../components/small-movie-card/small-movie-card";
import {films} from "../../mock/films";
import {UserPage} from "../../components/user-page/user-page";

export const MyList: FC = () => {
  return (
    <UserPage>
      <Header
        imgAvatar='img/avatar.jpg'
        mainTitle="My list"
        className="user-page__head"
        authorized
      />
      <Catalog title="Catalog">
        <div className="catalog__movies-list">
          {films.map(({title, img, prevVideo, id}: any, index: number) =>
            <>
              {index < 9 &&
                <SmallMovieCard
                  key={`answer-${index}`}
                  title={title}
                  img={img}
                  prevVideo={prevVideo}
                  className="catalog__movies-card"
                  id={id}
                />
              }
            </>
          )}
        </div>
      </Catalog>
      <Footer/>
    </UserPage>
  )
};
