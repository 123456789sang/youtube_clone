
export const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
   
export const LIVE_CHAT_COUNT =20
export const YOUTUBE_VIDEO_API='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_SEARCH_RESULTS_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&contentDetails&type=video&maxResults=25&key=' + GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_API =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&key=`+GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API =`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&key=`+GOOGLE_API_KEY;

export const VIDEO_API='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY;

export const GET_VIDEO_API_URL = (categoryId) => { 
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN${
    categoryId ? `&videoCategoryId=${categoryId}` : ''
  }&key=${GOOGLE_API_KEY}`;
};
