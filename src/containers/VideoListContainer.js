import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = (state) => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};


export default connect(VideoListContainer, mapDispatchToProps)(VideoList);
