import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  return _.extend({}, state, action);
};

export default videoListReducer;
