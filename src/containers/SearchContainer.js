import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var SearchContainer = (state) => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
      handleSearchInputChange: (searchTerm) => dispatch(handleVideoSearch(searchTerm))
  };
};

export default connect(SearchContainer, mapDispatchToProps)(Search);
