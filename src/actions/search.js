import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  
  return (dispatch) => {
    var cb = function(data) {
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
    };
    
    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, cb);
  };
};

export default handleVideoSearch;
