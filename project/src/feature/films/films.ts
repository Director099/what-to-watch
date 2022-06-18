import {createDomain, createEvent, createStore, forward, restore, sample} from 'effector'
import {createGate} from "effector-react";

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
    method: 'GET'
  }).then(response => response.json());
});

fxCommentPostFilms.use((id) => {
  return fetch( `https://9.react.pages.academy/wtw/comments/${id}`, {
    method: 'POST'
  }).then(response => response.json());
});

fxSimilarFilms.use((id) => {
  return fetch( `https://9.react.pages.academy/wtw/films/${id}/similar`, {
    method: 'GET'
  }).then(response => response.json());
});

// Подробнее изучить про Gate
forward({
  from: gateInit.open,
  to: [fxListfilms, fxPromofilm]
});

forward({
  from: submitFormComment,
  to: fxCommentPostFilms,
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
