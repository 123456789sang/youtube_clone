import React from 'react'
import { Link } from 'react-router-dom';
import useGetVideo from '../hooks/useGetVideo'
import VideoCardDetails from './VideoCardDetails';
const VideoList = () => {
    const videos=useGetVideo();

    return (
        <div className='flex flex-col gap-4 w-full justify-start'>
            
            {videos.map((video)=>(
               <Link to={`/watch?v=${video.id}`} key={video.id}>
                    <VideoCardDetails info={video} />
               </Link>
            ))}
        </div>
    )
}

export default VideoList;