import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ProductReducer from './reducers/reducer';
import App from './App';

const store = createStore(ProductReducer);

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('root')
);
