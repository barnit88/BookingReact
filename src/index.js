import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/loginReducer'
import itemReducer from './store/reducers/itemReducer'

// For redux
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'

const masterReducer = combineReducers({
  login : reducer,
  item :  itemReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(masterReducer,composeEnhancers(
  applyMiddleware(thunk)
));


// const store = createStore(reducer,composeEnhancers(
//   applyMiddleware(thunk)
// ));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
