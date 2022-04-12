import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import imagesReducer from '../redux/images';

const rootReducer = combineReducers(
  {
    imagesReducer,
  },
);
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
