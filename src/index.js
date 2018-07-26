import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import store from './config/store';

const target = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
)
registerServiceWorker();
