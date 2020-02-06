import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var SearchContainer = (state) => {
  return {
    value: state.value
  };
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
const mapDispatchToProps = (dispatch) => {
  return {
      handleSearchInputChange: (searchTerm) => dispatch(handleVideoSearch(searchTerm))
  };
};

export default connect(SearchContainer, mapDispatchToProps)(Search);
