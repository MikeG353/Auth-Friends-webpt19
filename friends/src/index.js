import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import friendsListReducer from './reducers'


const store = createStore(friendsListReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

