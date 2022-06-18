import React, {FC} from 'react';
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import {Catalog} from "../../components/catalog/catalog";
import {SmallMovieCard} from "../../components/small-movie-card/small-movie-card";
import {UserPage} from "../../components/user-page/user-page";
import {useGate} from "effector-react";
import {$listFilms, gateInit} from "../../feature/films/films";
import {useStore} from "effector-react/compat";

export const MyList: FC = () => {
  useGate(gateInit);
  const listFilms = useStore($listFilms);

  return (
    <UserPage>
      <Header
        mainTitle="My list"
        className="user-page__head"
        authorized
      />
      <Catalog title="Catalog">
        <div className="catalog__movies-list">
          {listFilms.map(({name, previewImage, videoLink, isFavorite, id}: any, index: number) =>
            {isFavorite &&
              <SmallMovieCard
                key={`answer-${index}`}
                title={name}
                img={previewImage}
                prevVideo={videoLink}
                className="catalog__movies-card"
                id={id}
              />
            }
          )}
          {listFilms.every(({isFavorite}) => isFavorite === false) && "Нет избранных фильмов"}
        </div>
      </Catalog>
      <Footer/>
    </UserPage>
  )
};
