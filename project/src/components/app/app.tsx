import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Main} from "../../pages/main/main";
import {MoviePage} from "../../pages/movie-page/movie-page";
import {Header} from "../header/header";
import {AddReview} from "../../pages/add-review/add-review";
import {MyList} from "../../pages/my-list/my-list";
import {PagePlayer} from "../../pages/page-player/page-player";
import {SignIn} from "../../pages/sign-in/sign-in";
import avatar from "../../assets/img/avatar.jpg";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/films/:id" element={
          <MoviePage>
            <Header imgAvatar={avatar} className="movie-card__head" authorized/>
          </MoviePage>
        } />
        <Route path="/add-review" element={<AddReview/>} />
        <Route path="/my-list" element={<MyList/>} />
        <Route path="/player" element={<PagePlayer/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/*" element={<p> 404</p>} />
      </Routes>
    </BrowserRouter>
  )
};
