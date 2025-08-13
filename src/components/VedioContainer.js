import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from "../utils/constants"
import VedioCard from './VedioCard'
import { Link } from 'react-router-dom'
import { YOUTUBE_CHANNEL_API } from '../utils/constants'

const VedioContainer = () => {
  const [videos, setVideos] = useState([])
  const [channelThumbnails,setChannelThumbnails]=useState({})
  useEffect(() => {
   getVideos()
 }, [])


const getVideos = async () => {
  try {
    const res = await fetch(YOUTUBE_VIDEO_API);
    const data = await res.json();
   

    if (!data.items) {
      alert("something went :please try again some time");
    
      return;
    }

    setVideos(data.items);

    // Get unique channel IDs
    const channelIds = [...new Set(data.items.map(v => v.snippet.channelId))];

    // Fetch each channel's thumbnail safely
    const channelResponses = await Promise.all(
      channelIds.map(async (id) => {
        const res = await fetch(`${YOUTUBE_CHANNEL_API}&id=${id}`);
        const data = await res.json();
        return data.items?.[0]; // safely access first item
      })
    );

    // Build the thumbnail mapping
    const logos = {};
    channelResponses.forEach((channel) => {
      if (channel) {
        logos[channel.id] = channel.snippet.thumbnails.default.url;
      }
    });

    setChannelThumbnails(logos);
  } catch (err) {
    alert("something went :please try again some time");
    
  }
};

  return (

    <div className="w-full border-6 border-red-950 px-2 sm:px-2 md:px-4 lg:px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {videos?.map((video) => (
                <Link key={video.id} to={"watch?v=" + video.id} className="block">
                    <VedioCard
                    info={video}
                    channelLogo={channelThumbnails[video.snippet.channelId]}
                    />
                </Link>
            ))}
        </div>
   </div>


  )
}

export default VedioContainer
