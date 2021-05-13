import React from "react";
import MovieCard from "../movie-card/movie-card";
import Footer from "../footer/footer";
import PageContent from "../page-content/page-content";
import Catalog from "../catalog/catalog";
import Header from "../header/header";

const App = ({movie}) => {
  return (
    <>
      <MovieCard>
        <Header imgAvatar="img/avatar.jpg" />
      </MovieCard>
      <PageContent>
        <Catalog movie={movie}/>
        <Footer/>
      </PageContent>
    </>
  );
};

export default App;
