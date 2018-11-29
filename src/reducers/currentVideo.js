import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  return _.extend({}, state, action);
};

export default currentVideoReducer;
