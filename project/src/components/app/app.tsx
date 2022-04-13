import {MovieCard} from '../movie-card/movie-card';
import {Footer} from '../footer/footer';
import {PageContent} from '../page-content/page-content';
import {Header} from '../header/header';
import {Catalog} from '../catalog/catalog';

// import MovieCardFull from '../movie-card-full/movie-card-full';

function App (): JSX.Element {
  return (
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
}

export default App;
