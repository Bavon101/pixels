import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { imageReducer, imagesReducer } from '../redux/images';

const rootReducer = combineReducers(
  {
    imagesReducer,
    imageReducer,
  },
);
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
