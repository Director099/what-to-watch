import {createDomain, createEvent, createStore, forward, sample} from "effector";

const apiDomain = createDomain();
export const fxFormSignIn = apiDomain.createEffect<void, any>();
export const submitFormSignIn = createEvent<{}>({});

export const formChange = createEvent<any>({});
export const $authInfo = createStore<{}>({email: '', password: ''});

fxFormSignIn.use((body) => {
  return fetch( `https://9.react.pages.academy/wtw/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
});

// Запрос на авторизацию
// fetch( `https://9.react.pages.academy/wtw/login`, {
//   headers: {
//     'x-token': 'ZmVyejA5OUBtYWlsLnJ1',
//   }
// }).then(response => response.json());

$authInfo.on(formChange, (state, {value, key}) => {
  const stateCopy = state;
  // @ts-ignore
  stateCopy[key] = value;
  return stateCopy
});

sample({
  clock: submitFormSignIn,
  source: $authInfo,
  fn: (authInfo) => authInfo,
  target: fxFormSignIn,
});
