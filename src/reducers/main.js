import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

const rootReducer = combineReducers({
  currentVideo,
  videoList
});

export default rootReducer;
