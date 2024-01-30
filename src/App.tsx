import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '@redux/store';

import { Root } from './Root';

import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss';
import 'react-dropdown/style.css';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
      <Router>
        <Root />
      </Router>
    </Provider>
  );
};
