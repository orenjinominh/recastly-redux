import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
console.log(exampleVideoData[0])
const initialState = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
console.log("Store: " + store.getState())
export default store;