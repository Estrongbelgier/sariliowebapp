import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from '~/routes/index.jsx';

import 'react-toastify/dist/ReactToastify.css';
import '~/assets/styles/global.css';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
