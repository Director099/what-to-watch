import {FC} from 'react';
import {MovieCard} from "../../components/movie-card/movie-card";
import {Header} from "../../components/header/header";
import {PageContent} from "../../components/page-content/page-content";
import {Catalog} from "../../components/catalog/catalog";
import {Footer} from "../../components/footer/footer";

export const Main: FC = () =>  (
  <>
    <MovieCard>
      <Header imgAvatar='img/avatar.jpg'/>
    </MovieCard>
    <PageContent>
      <Catalog />
      <Footer/>
    </PageContent>
  </>
);
