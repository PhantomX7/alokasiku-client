import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'reducers';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import './index.css';

import App from 'App';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: { main: '#00e676', light: '#66ffa6', dark: '#66ffa6' },
    secondary: { main: '#ff8a65', light: '#ffbb93', dark: '#c75b39' },
  },
});

const render = (App: React.FC) => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </MuiThemeProvider>,
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
