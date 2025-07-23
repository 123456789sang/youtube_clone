import React from 'react';
import { Link } from 'react-router-dom';
import { formatTimeAgo} from '../utils/helper.js';

const SearchCard = ({ video, channelThumbnail,viewCount,duration }) => {
    console.log("SearchCard duration:", duration);

  const { videoId } = video.id;
  const {
    title,
    thumbnails,
    channelTitle,
    description,
    publishedAt,
    
  } = video.snippet;

  return (
    <Link to={`/watch?v=${videoId}`} key={videoId}>
       <div className="flex flex-col w-full max-w-full md:flex-row gap-4 rounded-xl shadow-md hover:bg-gray-50 transition-all mx-2 sm:mx-4 md:mx-6 lg:mx-12 xl:mx-24">
            {/* Thumbnail */}
            <div className="w-full md:w-2/5 aspect-video relative flex-shrink-0 overflow-hidden">
                <img
                    className="w-full h-full rounded-xl object-cover"
                    src={thumbnails?.medium?.url}
                    alt={title}
                />
                {duration&&(<span className='absolute bottom-2 right-2 bg-black text-white p-1 sm:.5 text-xs sm:text-sm rounded bg-opacity-80'>{duration}</span>)}
            </div>

            {/* Video Info */}
            <div className="flex flex-col gap-3 md:w-3/5 px-1 sm:0 w-full  overflow-hidden">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
                    {title}
                </h3>
                <p className='text-sm  text-gray-600'>{viewCount} . {formatTimeAgo(publishedAt)}</p>

                {/* channel thumbnail */}
                <div className="flex items-center gap-2 ">
                <img
                    src={channelThumbnail || '/fallback-channel.png'}
                    alt={channelTitle}
                    className="h-6 w-6 rounded-full object-cover"
                    onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/fallback-channel.png';
                }}
                />
                <p className="text-sm text-gray-600">{channelTitle}</p>
            </div>


                <div className="flex flex-col p-1 sm:0 ">
                                    
                    <p className="text-sm text-gray-600 mt-1 pb-1 sm:0 line-clamp-3 ">
                    {description}
                    </p>
                </div> 
            </div>
      </div>
    </Link>
  );
};

export default SearchCard;
