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
import listsReducer from './reducers/listsReducer'
import thunk from 'redux-thunk'

require('dotenv').config();

const rootReducer = combineReducers({
  auth: authReducer,
  places: placesReducer,
  friends: friendsReducer,
  lists: listsReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'));
