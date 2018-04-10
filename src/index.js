import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './reducers/authReducer'
import placesReducer from './reducers/placesReducer'
import friendsReducer from './reducers/friendsReducer'
import mapReducer from './reducers/mapReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  auth: authReducer,
  places: placesReducer,
  friends: friendsReducer,
  map: mapReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'));
