import React from "react";
import MovieCard from "../movie-card/movie-card";
import Footer from "../footer/footer";
import PageContent from "../page-content/page-content";
import Catalog from "../catalog/catalog";
import Header from "../header/header";
import MovieCardFull from "../movie-card-full/movie-card-full";

const App = ({movie}) => {
  return (
    <>
      <MovieCardFull movie={movie}>
        <Header imgAvatar="img/avatar.jpg" />
      </MovieCardFull>
      <PageContent>
        <Footer/>
      </PageContent>
    </>
  );
};

export default App;
