import {createDomain, createEvent, forward, restore, sample, createStore} from 'effector'
import {createGate} from "effector-react";
import {$token, fxIsCompliteAuthorization} from "../authorization/authorization";

//createDomain ?????  / используют с onCreateEffect как абстрактный класс, используют по ситуации
const apiDomain = createDomain();
export const fxListfilms = apiDomain.createEffect<void, any>();
export const fxCurrentfilm = apiDomain.createEffect<void, any>();
export const fxPromofilm = apiDomain.createEffect<void, any>();
export const fxCommetfilm = apiDomain.createEffect<void, any>();
export const fxSimilarFilms = apiDomain.createEffect<void, any>();
export const fxCommentPostFilms = apiDomain.createEffect<void, any>();

export const gateInit = createGate<string>("");
export const gateCurrentFilmInit = createGate<string>("");

export const linkFilm = createEvent<number>();
export const submitFormComment = createEvent<any>();

fxListfilms.use(() => {
  return fetch( 'https://9.react.pages.academy/wtw/films', {
    method: 'GET'
  }).then(response => response.json());
});

fxPromofilm.use(() => {
  return fetch( `https://9.react.pages.academy/wtw/promo`, {
    method: 'GET'
  }).then(response => response.json());
});

fxCurrentfilm.use((id) => {
  return fetch( `https://9.react.pages.academy/wtw/films/${id}`, {
    method: 'GET'
  }).then(response => response.json());
});

fxCommetfilm.use((id) => {
  return fetch( `https://9.react.pages.academy/wtw/comments/${id}`, {
    method: 'GET',
    headers: {
      'x-token': 'ZmVyejA5OUBtYWlsLnJ1',
    }
  }).then(response => response.json());
});

fxCommentPostFilms.use((id) => {
  return fetch( `https://9.react.pages.academy/wtw/comments/${id}`, {
    method: 'POST',
    body: JSON.stringify({
      comment: "Home is amazing. It's like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius  Home is amazing. It's like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius",
      rating: 5
    }),
    headers: {
      'x-token': 'ZmVyejA5OUBtYWlsLnJ1',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
});

fxSimilarFilms.use((id) => {
  return fetch( `https://9.react.pages.academy/wtw/films/${id}/similar`, {
    method: 'GET'
  }).then(response => response.json());
});

forward({
  from: submitFormComment,
  to: fxCommentPostFilms,
});

// Подробнее изучить про Gate
sample({
  clock: gateInit.open,
  source: $token,
  fn: (token) => token,
  target: [fxIsCompliteAuthorization, fxListfilms, fxPromofilm]
});

sample({
  clock: [gateCurrentFilmInit.open, linkFilm],
  fn: (id: any) => {
    fxCurrentfilm(id);
    fxCommetfilm(id);
    fxSimilarFilms(id);
  }
});

export const $listFilms = restore<[]>(fxListfilms.doneData, []);
export const $similarFilms = restore<[]>(fxSimilarFilms.doneData, []);
export const $commentFilm = restore<{}>(fxCommetfilm.doneData, []);
export const $movie = restore<{}>(fxCurrentfilm.doneData, {});
export const $promoFilm = restore<{}>(fxPromofilm.doneData, {});
