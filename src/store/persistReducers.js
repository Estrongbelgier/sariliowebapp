/* eslint-disable comma-dangle */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'sariliowebapp', // TIP geralemente nome da aplicação para que o acesso seja feito apenas por ela
      storage,
      whitelist: ['connection', 'auth', 'user'], // TIP quais reducer poderão persistir no storage do navegador
    },
    reducers
  );

  return persistedReducer;
};
// REDUX reducer persists
