import React from "react";
import MovieCard from "../movie-card/movie-card";
import Footer from "../footer/footer";
import PageContent from "../page-content/page-content";
import Catalog from "../catalog/catalog";
import Header from "../header/header";

const App = () => {
  return (
    <>
      <MovieCard>
        <Header imgAvatar="img/avatar.jpg" />
      </MovieCard>
      <PageContent>
        <Catalog/>
        <Footer/>
      </PageContent>
    </>
  );
};

export default App;
