import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'reducers';

import './index.css';

import App from 'App';

const store = configureStore();

const render = (App: React.FC) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

render(App);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('App', () => render(App));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
