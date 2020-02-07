import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = (state) => {
  return {
    video: state.currentVideo
  };
};

export default connect(VideoPlayerContainer)(VideoPlayer);
