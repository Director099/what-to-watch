import {FC} from 'react';
import {Player} from "../../components/player/player";
import {films} from "../../mock/films";

export const PagePlayer: FC = () => {
  return (
    <Player
      title={films[0].title}
      img={films[0].img}
      prevVideo={films[0].prevVideo}
    />
  )
};
