import React from 'react';
import handleVideoSearch from '../actions/search.js';
import store from '../store/store.js';
import SearchContainer from '../containers/SearchContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';

class App extends React.Component {

  componentDidMount() {
    store.dispatch(handleVideoSearch('boxer puppies'));
  }

  render() {
  return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
}
}

export default App;
