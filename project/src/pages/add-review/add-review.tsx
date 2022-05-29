import React, {FC} from 'react';
import {Header} from "../../components/header/header";
import {MovieCard} from "../../components/movie-card/movie-card";

export const AddReview: FC = () => {
  return (
    <MovieCard>
      <Header imgAvatar='img/avatar.jpg'/>
    </MovieCard>
  )
};
