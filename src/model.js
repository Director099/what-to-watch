import {createStore} from 'effector';
import {films} from "./mock/films";

const $films = createStore(films);

export {
  $films,
};
