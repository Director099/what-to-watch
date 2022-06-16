import {createDomain, createStore, forward, restore, sample} from 'effector'
import {createGate} from "effector-react";

//createDomain ?????  / используют с onCreateEffect как абстрактный класс, используют по ситуации
const apiDomain = createDomain();
export const fxListfilms = apiDomain.createEffect<void, any>();
export const fxCurrentfilm = apiDomain.createEffect<void, any>();
export const fxPromofilm = apiDomain.createEffect<void, any>();
export const fxCommetfilm = apiDomain.createEffect<void, any>();

export const gateInit = createGate<string>("");
export const gateCurrentFilmInit = createGate<string>("");

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

// Подробнее изучить про Gate
forward({
  from: gateInit.open,
  to: [fxListfilms, fxPromofilm]
});


sample({
  source: gateCurrentFilmInit.open,
  fn: (id: any) => {
    fxCurrentfilm(id);
    fxCommetfilm(id);
  }
});

export const $listFilms = restore<[]>(fxListfilms.doneData, []);
export const $movie = restore<{}>(fxCurrentfilm.doneData, {});
export const $promoFilm = restore<{}>(fxPromofilm.doneData, {});
export const $commentFilm = restore<{}>(fxCommetfilm.doneData, []);



