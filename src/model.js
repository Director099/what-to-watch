import {createStore, createEvent, combine} from 'effector';
// сторы

// все задачи
export const $todos = createStore([]);

// текущий фильтр, для простоты будет null/true/false
export const $activeFilter = createStore(null);
